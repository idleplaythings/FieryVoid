
model.UiEventManager = function UiEventManager(
	gameContainer, coordinateConverter, externalDispatcher, scrolling, zooming)
{
    this.listeners = {
        click: [],
        mousemove: [],
        mouseout: [],
        drag: [],
        keyup: []
    };

    this._gameContainer = gameContainer;
    this._scrolling = scrolling;
    this._zooming = zooming;
  
    this.zoom = 1;

    externalDispatcher.attach("ZoomEvent", this.onZoom.bind(this));

    this._dispatcher = externalDispatcher;
    this.dragging = false;
    this.draggingStartPosition = null;
    this.lastDraggingPosition = null;
    this.distanceDragged = 0;
    this.draggingDistanceTreshold = 10;

    this.inputMode = null;

    this._coordinateConverter = coordinateConverter;
    this._hotkeys = new model.HotkeyFactory().getHotkeys();
};

model.UiEventManager.prototype.init = function()
{
    var element = this._gameContainer.get();
    this._zooming.init(element);

    element.on("mousedown",  this.mouseDown.bind(this));
    element.on("mouseup",    this.mouseUp.bind(this));
    element.on("mouseout",   this.mouseOut.bind(this));
    element.on("mouseover",   this.mouseOver.bind(this));
    element.on("mousemove",  this.mouseMove.bind(this));
    jQuery(document).on("keyup",   this.keyup.bind(this));
    jQuery('input').on('keyup', function(e){e.originalEvent.fromUi = true;});

    return this;
};

model.UiEventManager.prototype.destroy = function()
{
    var element = this._gameContainer.get();

    element.off("mousedown",  this.mouseDown.bind(this));
    element.off("mouseup",    this.mouseUp.bind(this));
    element.off("mouseout",   this.mouseOut.bind(this));
    element.off("mouseover",   this.mouseOver.bind(this));
    element.off("mousemove",  this.mouseMove.bind(this));
    jQuery(document).off("keyup",   this.keyup.bind(this));
    jQuery('input').off('keyup', function(e){e.originalEvent.fromUi = true;});

    return this;
};

model.UiEventManager.prototype.getInputMode = function()
{
	return this.InputModeStates[this.InputModeStates.length-1];
};

model.UiEventManager.prototype.setInputMode = function(state)
{
	if (this.inputMode)
		this.inputMode.deactivate(this);

    this.inputMode = state;

    if (state.activate)
	   state.activate(this);
};

model.UiEventManager.prototype.onZoom = function(event)
{
    this.zoom = event.zoom;
};

model.UiEventManager.prototype.getViewPortAndGameObject = function(v, g)
{
    return {
        view: v,
        game: g
    };
};

model.UiEventManager.prototype.keyup = function(event)
{
    if (event.originalEvent.fromUi)
        return;

    var hotkey = this._hotkeys.getFromKeyCode(event.keyCode);
    console.log("hotkey", hotkey);

    if ( ! hotkey)
        return;

    this.fireEvent(
        'KeyUpEvent',
        {key: hotkey}
    );
};

model.UiEventManager.prototype.mouseDown = function(event)
{
    var pos = this._getMousePositionInObservedElement(event);
    var gamePos = this._coordinateConverter.fromViewPortToGame(pos);

    this.draggingStartPosition = this.getViewPortAndGameObject(pos, gamePos);
    this.lastDraggingPosition = this.getViewPortAndGameObject(pos, gamePos);

    var self = this;
    var payload = {
        start: this.draggingStartPosition,
        ctrlKey: event.ctrlKey,
        altKey: event.altKey,
        shiftKey: event.shiftKey,
        metaKey: event.metaKey,
        capture: function(callback){
            self.dragging = callback;
            payload.stopped = true;
        }
    };
    this.fireEvent('DragEvent', payload);
};

model.UiEventManager.prototype.mouseUp = function(event)
{
    if (this.distanceDragged < this.draggingDistanceTreshold)
        this.click(event);

    if (this.dragging)
        this.dragging({release:true});

    this.distanceDragged = 0;
    this.dragging = false;
};

model.UiEventManager.prototype.mouseOut = function(e)
{

    if (this.dragging)
        this.fireEvent('DragEvent', {release:true});
    
    this.fireEvent('MouseOutEvent', {});

    this.distanceDragged = 0;
    this.dragging = false;
};

model.UiEventManager.prototype.mouseOver = function(e)
{

};

model.UiEventManager.prototype.mouseMove = function(event)
{
    if (this.dragging)
        this.drag(event);
    else
        this.doMouseMove(event);
};

model.UiEventManager.prototype.doMouseMove = function(event)
{
    var pos = this._getMousePositionInObservedElement(event);
    var gamePos = this._coordinateConverter.fromViewPortToGame(pos);

    this.fireEvent(
        'MouseMoveEvent',
        this.getViewPortAndGameObject(pos, gamePos)
    );

};

model.UiEventManager.prototype.drag = function(event)
{
    var pos = this._getMousePositionInObservedElement(event);
    var gamePos = this._coordinateConverter.fromViewPortToGame(pos);
    var current = this.getViewPortAndGameObject(pos, gamePos);

    var deltaView = {
        x: pos.x - this.lastDraggingPosition.view.x,
        y: pos.y - this.lastDraggingPosition.view.y
    };

    var deltaGame = {
        x: (pos.x - this.lastDraggingPosition.view.x) * (1/this.zoom),
        y: (pos.y - this.lastDraggingPosition.view.y) * (1/this.zoom)
    };

    var payload = {
        start: this.draggingStartPosition,
        previous: this.lastDraggingPosition,
        current: current,
        delta: this.getViewPortAndGameObject(deltaView, deltaGame)
    };

    this.distanceDragged += MathLib.distance({x:0, y:0}, deltaView);
    this.lastDraggingPosition = current;
    this.dragging(payload);
};

model.UiEventManager.prototype.click = function(event)
{
    var pos = this._getMousePositionInObservedElement(event);
    var gamePos = this._coordinateConverter.fromViewPortToGame(pos);

	var payload = this.getViewPortAndGameObject(pos, gamePos);

    this.fireEvent(
        'ClickEvent',
        payload
    );
};

model.UiEventManager.prototype.fireEvent = function(eventName, payload)
{
    payload.name = eventName;
    this._dispatcher.dispatch(payload);
};

model.UiEventManager.prototype._getMousePositionInObservedElement = function(event)
{
    var element = this._gameContainer.get();

    return {
        x: event.pageX - element.offset().left,
        y: event.pageY - element.offset().top
    };
};
