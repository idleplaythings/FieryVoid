model.Zooming = function Zooming(element, dispatcher, scrolling, converter)
{
    this.wheeltimer = null;
    this.wheelzoom = 0;
    this.zoominprogress = false;
    this.zoom = 1;
    this.dispatcher = dispatcher;
    this.zoomTarget = null;
    this.zoomPositionTarget = null;
    this.coordinateConverter = converter;
    this.scrolling = scrolling;

    this.element = element;
};

model.Zooming.prototype.constructor = model.Zooming;

model.Zooming.prototype.init = function()
{
    this.bindEvent(this.element);
    this.animate();
};

model.Zooming.prototype.animate = function()
{
    requestAnimationFrame( jQuery.proxy(this.animate, this) );
    if ( this.zoomTarget && this.zoomTarget != this.zoom)
    {
        var change = (this.zoomTarget - this.zoom);
        if (Math.abs(change) < 0.00001)
        {
            this.dispatchZoom(this.zoomTarget);
            if (this.zoomPositionTarget)
            {
                //this.scrolling.scrollTo(this.zoomPositionTarget);
                this.zoomPositionTarget = null;
            }
        }
        else
        {
            this.dispatchZoom(this.zoom + change*0.1);
            if (this.zoomPositionTarget)
            {
                //this.scrolling.scrollTo(
                //    MathLib.getPointBetween(
                //        this.scrolling.position, this.zoomPositionTarget, 0.1));
            }
        }
    }
};

model.Zooming.prototype.mouseWheel = function(e)
{
    console.log("wheel");
    e = e ? e : window.event;
    var wheelData = e.detail ? e.detail * -1 : e.wheelDelta / 40;

    var step = 0;
    if ( wheelData < 0)
        step = -1;
    else
        step = 1;

    var offsetLeft = this.element[0].offsetLeft;
    var offsetTop = this.element[0].offsetTop;

    var x = event.pageX - offsetLeft;
    var y = event.pageY - offsetTop;

    this.zoomPositionTarget = this.coordinateConverter.fromViewPortToGame({x:x, y:y});
    this.changeZoom(step);
    return this.cancelEvent(e);
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

    if (newzoom > 1)
        newzoom = 1;

    //newzoom = parseFloat(newzoom.toFixed(2));
    //console.log("zoom to: " + newzoom);
    this.zoomTarget = newzoom;
};

model.Zooming.prototype.dispatchZoom = function(zoom)
{
    this.zoom = zoom;

    this.dispatcher.dispatch({
        name: "ZoomEvent",
        zoom: zoom
    });
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
