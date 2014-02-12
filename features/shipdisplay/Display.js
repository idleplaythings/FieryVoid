model.Display = function Display(icon, gameScene, dispatcher)
{
    this.icon = icon;
    this.dispatcher = dispatcher;
    
    this.gameScene = gameScene;
    this.uiEventResolver = null;
    this.scrolling = null;
};

model.Display.prototype.renderOn = function(target)
{
    var coordinateConverter = new model.CoordinateConverterViewPort(this.gameScene);

    this.uiEventResolver = new model.UiFocusResolver(
        coordinateConverter,
        new model.EventDispatcher(),
        this.dispatcher
    ).observeDomElement(target);

    this.uiEventResolver.registerListener(
        'click', this.onClicked.bind(this), 0);

    this.uiEventResolver.registerListener(
        'mousemove', this.onMouseMove.bind(this), 0);

    this.uiEventResolver.registerListener(
        'mouseout', function(){
            this.dispatcher.dispatch({name:'mouseout'});
        }.bind(this), 0);

    this.uiEventResolver.registerListener(
        'keyup', function(payload){
            this.dispatcher.dispatch({name:'keyup', key: payload.key});
        }.bind(this), 0);

    //this.scrolling = new model.Scrolling(this.dispatcher);
    //this.scrolling.registerTo(this.uiEventResolver);

    this.icon.create();
    this.gameScene.scene.add(this.icon.getThreeObject());
    this.animate();
    return this;
};

model.Display.prototype.animate = function()
{
    requestAnimationFrame(this.animate.bind(this));

    this.gameScene.animate(0);
};

model.Display.prototype.onClicked = function(payload)
{
    this.dispatcher.dispatch({name:'click', position: payload});
};

model.Display.prototype.onMouseMove = function(payload)
{
    this.dispatcher.dispatch({
        name:'mousemove',
        position: payload
    });
};

model.Display.prototype.destroy = function()
{
    this.uiEventResolver.destroy();
    //this.scrolling.destroy();
};




