model.Display = function Display(icon, gameScene, dispatcher)
{
    this.dispatcher = dispatcher;
    this.icon = icon;
    this.gameScene = gameScene;
    this.uiEventResolver = null;
};

model.Display.prototype.renderOn = function(target)
{
    var coordinateConverter = new model.CoordinateConverterViewPort(this.gameScene);

    this.uiEventResolver = new model.UiFocusResolver(
        coordinateConverter, new model.EventDispatcher(), this.dispatcher)
        .observeDomElement(target.find('canvas'));

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
            this.dispatcher.dispatch({name:'keyup', keyCode: payload.keyCode});
        }.bind(this), 0);

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
    var pos = this.icon.getTileOnPosition(payload.game);
    this.dispatcher.dispatch({name:'click', position: pos});
};

model.Display.prototype.onMouseMove = function(payload)
{
    var pos = this.icon.getTileOnPosition(payload.game);
    var tilePos = this.icon.getClosestTilePosition(payload.game);
    this.dispatcher.dispatch({
        name:'mousemove',
        position: payload,
        tile:pos,
        tilePosition: tilePos
    });
};

model.Display.prototype.destroy = function()
{
    //TODO: unbind everything from ui event nönnöti
};




