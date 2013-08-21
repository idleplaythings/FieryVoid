model.Scrolling = function Scrolling(dispatcher)
{
    this.dispatcher = dispatcher;
    this.position = {x:0, y:0};

    this.dispatcher.attach(new model.EventListener(
        "ZoomEvent", $.proxy(this.onZoom, this)));

    this.scrollingSpeed = 1;
    this.zoom = 1;
};

model.Scrolling.prototype.constructor = model.Scrolling;

model.Scrolling.prototype.registerTo = function(uiEventRegister)
{
    uiEventRegister.registerListener(this.scroll.bind(this), 0, 'drag');
};

model.Scrolling.prototype.onZoom = function(event)
{
    if (event.zoom)
        this.zoom = event.zoom;
};

model.Scrolling.prototype.getScrollingSpeed = function()
{
    return this.scrollingSpeed*(1/this.zoom);
};

model.Scrolling.prototype.scroll = function (payload)
{
    var dx = payload.current.view.x - payload.previous.view.x;
    var dy = payload.current.view.y - payload.previous.view.y;
    //console.log("dx: " + dx + ", dy: " + dy);
    var speed = this.getScrollingSpeed();
    var position = {x:dx*speed, y:dy*speed};

    this.position.x -= position.x;
    this.position.y += position.y;
    this.dispatch(this.position);
};

model.Scrolling.prototype.scrollTo = function(pos)
{
    this.position.x = pos.x;
    this.position.y = pos.y;
    //Graphics.moveCamera({x:dx*speed, y:dy*speed});

    this.dispatch(this.position);
};

model.Scrolling.prototype.dispatch = function(pos)
{
    var scrollEvent = new model.Event("player", "ScrollEvent");
    scrollEvent.position = pos;

    this.dispatcher.dispatch(scrollEvent);
};

