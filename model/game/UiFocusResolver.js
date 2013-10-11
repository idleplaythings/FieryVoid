model.UiFocusResolver = function UiFocusResolver(coordinateConverter, externalDispatcher)
{
    this.listeners = {
        click: [],
        drag: []
    };

    this.zoom = 1;

    externalDispatcher.attach("ZoomEvent", this.onZoom.bind(this));

    this.observedElement = null;

    this.dragging = false;
    this.draggingStartPosition = null;
    this.lastDraggingPosition = null;
    this.distanceDragged = 0;
    this.draggingDistanceTreshold = 10;

    this.coordinateConverter = coordinateConverter;
};

model.UiFocusResolver.prototype.onZoom = function(event)
{
    this.zoom = event.zoom;
};

model.UiFocusResolver.prototype.getViewPortAndGameObject = function(v, g)
{
    return {
        view: v,
        game: g
    };
};

model.UiFocusResolver.prototype.registerListener = function(event, callback, priority)
{
    if (! this.listeners[event])
        throw Error("Unrecognized event '" + event + "'");

    this.listeners[event].push({
        callback:callback,
        priority: priority
    })

    this.listeners[event] = this.listeners[event].sort(this.__sortByListenerPriority);
};

model.UiFocusResolver.prototype.__sortByListenerPriority = function(a,b)
{
    return b.priority - a.priority;
}

model.UiFocusResolver.prototype.observeDomElement = function(element)
{
    element.on("mousedown",  this.mouseDown.bind(this));
    element.on("mouseup",    this.mouseUp.bind(this));
    element.on("mouseout",   this.mouseOut.bind(this));
    element.on("mousemove",  this.mouseMove.bind(this));
    this.observedElement = element;
};

model.UiFocusResolver.prototype.getMousePositionInObservedElement = function(event)
{
    return {
        x: event.pageX - this.observedElement[0].offsetLeft,
        y: event.pageY - this.observedElement[0].offsetTop
    };
};

model.UiFocusResolver.prototype.mouseDown = function(event)
{
    var pos = this.getMousePositionInObservedElement(event);
    var gamePos = this.coordinateConverter.fromViewPortToGame(pos);

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
    this.fireEvent(payload, this.listeners.drag);
};

model.UiFocusResolver.prototype.mouseUp = function(event)
{
    if (this.distanceDragged < this.draggingDistanceTreshold)
        this.click(event);

    if (this.dragging)
        this.dragging({release:true});

    this.distanceDragged = 0;
    this.dragging = false;
};

model.UiFocusResolver.prototype.mouseOut = function(e)
{
    if (this.dragging)
        this.fireEvent({release:true}, this.listeners.drag);

    this.distanceDragged = 0;
    this.dragging = false;
};

model.UiFocusResolver.prototype.mouseMove = function(event)
{
    if (this.dragging)
        this.drag(event);

};

model.UiFocusResolver.prototype.drag = function(event)
{
    var pos = this.getMousePositionInObservedElement(event);
    var gamePos = this.coordinateConverter.fromViewPortToGame(pos);
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

model.UiFocusResolver.prototype.click = function(event)
{
    var pos = this.getMousePositionInObservedElement(event);
    var gamePos = this.coordinateConverter.fromViewPortToGame(pos);

    this.fireEvent(
        this.getViewPortAndGameObject(pos, gamePos),
        this.listeners.click
    );
};

model.UiFocusResolver.prototype.fireEvent = function(payload, listeners)
{
    payload.stopped = false;
    payload.stop = function(){this.stopped = true;};

    for (var i in listeners)
    {
        var listener = listeners[i];
        listener.callback(payload);
    }
};