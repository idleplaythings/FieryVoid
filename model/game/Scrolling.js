model.Scrolling = function Scrolling(element, dispatcher, scene)
{
    this.scrollingstarted = 0;
    this.scrolling = false;
    this.lastpos = {x:0, y:0};
    this.scrollingSpeed = 1;
    this.mouseRightButton = 3;
    this.dispatcher = dispatcher;
    this.position = {x:0, y:0};
    this.element = element;

    this.distanceMoved = 0;
    this.distanceTreshold = 10;
    this.coordinateConverter = new model.CoordinateConverterViewPort(scene);

    this.dispatcher.attach(new model.EventListener(
        "ZoomEvent", $.proxy(this.onZoom, this)));

    this.zoom = 1;
};

model.Scrolling.prototype.constructor = model.Scrolling;

model.Scrolling.prototype.onZoom = function(event)
{
    if (event.zoom)
        this.zoom = event.zoom;
};

model.Scrolling.prototype.init = function()
{
    this.element.on("mousedown", $.proxy(this.mousedown, this));
    this.element.on("mouseup", $.proxy(this.mouseup, this));
    this.element.on("mouseout", $.proxy(this.mouseout, this));
    this.element.on("mousemove", $.proxy(this.mousemove, this));
};

model.Scrolling.prototype.mousedown = function(event)
{
    if (!event)// || event.which !== this.mouseRightButton)
        return;

    event.stopPropagation(event);

    var offsetLeft = this.element[0].offsetLeft;
    var offsetTop = this.element[0].offsetTop;

    this.scrolling = true;
    this.scrollingstarted = ((new Date()).getTime());

    var x = event.pageX - offsetLeft;
    var y = event.pageY - offsetTop;

    this.lastpos.x = x;
    this.lastpos.y = y;
};

model.Scrolling.prototype.mouseup  = function(event)
{
    if (this.distanceMoved < this.distanceTreshold)
    {
        var offsetLeft = this.element[0].offsetLeft;
        var offsetTop = this.element[0].offsetTop;

        var x = event.pageX - offsetLeft;
        var y = event.pageY - offsetTop;

        var clickPosition = {x:x, y:y};

        console.log("clicked on " +x + ","+y);
        var pos = this.coordinateConverter.fromViewPortToGame(clickPosition);

        var clickEvent = new model.Event("player", "clickEvent");
        clickEvent.position = pos;
        this.dispatcher.dispatch(clickEvent);
    }
    this.distanceMoved = 0;
    this.scrolling = false;
};

model.Scrolling.prototype.mouseout = function(event)
{
    this.distanceMoved = 0;
    model.Scrolling.Scrolling = false;
};

model.Scrolling.prototype.mousemove = function(event)
{
	event.stopPropagation(event);

    if (this.scrolling === false)
    {
        return;
    }

    var offsetLeft = this.element[0].offsetLeft;
    var offsetTop = this.element[0].offsetTop;

    var x = event.pageX - offsetLeft;
    var y = event.pageY - offsetTop;

    var dx = x - this.lastpos.x;
    var dy = y - this.lastpos.y;

    this.scroll(dx,dy);

    this.distanceMoved += MathLib.distance({x:0, y:0}, {x:dx, y:dy});

    this.lastpos.x = x;
    this.lastpos.y = y;
};

model.Scrolling.prototype.getScrollingSpeed = function()
{
    return this.scrollingSpeed*(1/this.zoom);
};

model.Scrolling.prototype.scroll = function (dx, dy){
    //console.log("dx: " + dx + ", dy: " + dy);
    var speed = this.getScrollingSpeed();
    var position = {x:dx*speed, y:dy*speed};

    this.position.x -= position.x;
    this.position.y += position.y;

    /*
    if (this.position.x < 0 )
        this.position.x = 0;

    if (this.position.y > 0 )
        this.position.y = 0;
        */

    //Graphics.moveCamera({x:dx*speed, y:dy*speed});
    this.dispatch(this.position);
};

model.Scrolling.prototype.scrollToWindow = function(pos)
{
    this.position.x = pos.x;
    this.position.y = pos.y;
    //Graphics.moveCamera({x:dx*speed, y:dy*speed});

    this.dispatch(this.position);
};

model.Scrolling.prototype.scrollTo3d = function(pos)
{
    this.position.x = pos.x;
    this.position.y = pos.y;
    //Graphics.moveCamera({x:dx*speed, y:dy*speed});

    this.dispatch(this.position);
};

model.Scrolling.prototype.dispatch = function(pos)
{
    var scrollEvent = new model.Event("player", "ScrollEvent");
    scrollEvent.position = this.position;

    this.dispatcher.dispatch(scrollEvent);
};

