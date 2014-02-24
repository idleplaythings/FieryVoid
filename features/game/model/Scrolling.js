model.Scrolling = function Scrolling(dispatcher)
{
    this.dispatcher = dispatcher;
    this.position = {x:0, y:0};

    this.dispatcher.attach("ZoomEvent", this.onZoom.bind(this));

    this.scrollingSpeed = 1;
    this.zoom = 1;
};

model.Scrolling.prototype.constructor = model.Scrolling;

model.Scrolling.prototype.registerTo = function(uiEventRegister)
{
    uiEventRegister.registerListener('drag', this.scroll.bind(this), 0);
};

model.Scrolling.prototype.getCurrentPosition = function()
{
    return this.position;
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
    if (payload.stopped)
        return;

    if (payload.capture)
    {
        payload.capture(this.scroll.bind(this));
        return;
    }

    if (payload.release)
        return;

    //var dx = payload.current.view.x - payload.previous.view.x;
    //var dy = payload.current.view.y - payload.previous.view.y;
    //console.log("dx: " + dx + ", dy: " + dy);
    //var speed = this.getScrollingSpeed();

    this.position.x -= payload.delta.game.x;
    this.position.y += payload.delta.game.y;
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
    this.dispatcher.dispatch({
        name: "ScrollEvent",
        position: pos
    });
};

