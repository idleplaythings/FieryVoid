model.UiFocusResolver = function UiFocusResolver(coordinateConverter, threshold)
{
    this.listeners = {
        click: [],
        drag: []
    };

    this.observedElement = null;

    this.dragging = false;
    this.draggingStartPosition = null;
    this.lastDraggingPosition = null;
    this.distanceDragged = 0;
    this.draggingDistanceTreshold = threshold || 10;

    this.coordinateConverter = coordinateConverter;
};

model.UiFocusResolver.prototype.getViewPortAndGameObject = function(v, g)
{
    return {
        view:v,
        game:g
    };
}

model.UiFocusResolver.prototype.registerListener = function(callback, z, type)
{
    if (! this.listeners[type])
        throw Error("Unrecognized type for UiFocusResolver '" + type + "'");

    this.listeners[type].push({
        callback:callback,
        z:z
    })

    this.listeners[type] =
        this.listeners[type].sort(function(a,b){return b.z - a.z;});
};

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

    this.dragging = true;
};

model.UiFocusResolver.prototype.mouseUp = function(event)
{
    if (this.distanceDragged < this.draggingDistanceTreshold)
        this.click(event);

    this.distanceDragged = 0;
    this.dragging = false;
};

model.UiFocusResolver.prototype.mouseOut = function(e)
{
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

    var delta = {
        x: pos.x - this.lastDraggingPosition.view.x,
        y: pos.y - this.lastDraggingPosition.view.y
    }

    var payload = {
        start: this.draggingStartPosition,
        previous: this.lastDraggingPosition,
        current: current
    };

    this.distanceDragged += MathLib.distance({x:0, y:0}, delta);
    this.lastDraggingPosition = current;
    this.fireEvent(payload, this.listeners.drag);
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
    for (var i in listeners)
    {
        var listener = listeners[i];
        listener.callback(payload);

        if (payload.stop)
            return;
    }
};