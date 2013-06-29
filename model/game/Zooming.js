model.Zooming = function Zooming(element, dispatcher)
{
    this.wheeltimer = null;
    this.wheelzoom = 0;
    this.zoominprogress = false;
    this.zoom = 1;
    this.dispatcher = dispatcher;

    this.element = element;
};

model.Zooming.prototype.constructor = model.Zooming;

model.Zooming.prototype.init = function()
{
    this.bindEvent(this.element);
};

model.Zooming.prototype.mouseWheel = function(e)
{
    e = e ? e : window.event;
    var wheelData = e.detail ? e.detail * -1 : e.wheelDelta / 40;

    if ( wheelData < 0)
        this.wheelzoom--;
    else
        this.wheelzoom++;

    if (this.wheeltimer === null && this.zoominprogress === false)
    {
        var o = this;
        var callback = function(event){o.wheelCallback.call(o);};
        this.wheeltimer = setTimeout(callback, 100);
    }

    return this.cancelEvent(e);
};

model.Zooming.prototype.wheelCallback = function()
{
    this.zoominprogress = true;
    var m = this.wheelzoom;
    this.wheelzoom = 0;

    this.wheeltimer = null;

    this.changeZoom(m);
};

model.Zooming.prototype.changeZoom = function(zoom)
{
    zoom *= 0.5;
    if (zoom < -0.5)
        zoom = -0.5;

    this.zoominprogress = false;
    var newzoom = this.zoom + (this.zoom * zoom);

    //console.log(zoom);


    if (newzoom < 0.01)
        newzoom = 0.01;

    if (newzoom > 2)
        newzoom = 2;

    //newzoom = parseFloat(newzoom.toFixed(2));
    this.zoom = newzoom;

    var zoomEvent = new model.Event("player", "ZoomEvent");
    zoomEvent.zoom = newzoom;

    this.dispatcher.dispatch(zoomEvent);
};

model.Zooming.prototype.bindEvent = function(element)
{
    element = element.get(0);

    var o = this;
    var callback = function(event){o.mouseWheel.call(o, event);};

    if(element.addEventListener)
    {
        element.addEventListener('DOMMouseScroll', callback, false);
        element.addEventListener('mousewheel', callback, false);
    }
};

model.Zooming.prototype.cancelEvent = function(e)
{
    e = e ? e : window.event;
    if(e.stopPropagation)
    e.stopPropagation();
    if(e.preventDefault)
    e.preventDefault();
    e.cancelBubble = true;
    e.cancel = true;
    e.returnValue = false;
    return false;
};
