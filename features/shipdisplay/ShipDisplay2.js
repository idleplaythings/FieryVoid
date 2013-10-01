model.ShipDisplay2 = function ShipDisplay2(icon, gameScene, dispatcher)
{
    this.dispatcher = dispatcher;
    this.shipIcon = icon;
    this.gameScene = gameScene;
    this.uiEventResolver = null;

    this.addedToScene = false;
};

model.ShipDisplay2.prototype.renderOn = function(target)
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

    this.createViewModeButton(target);

    return this;
};

model.ShipDisplay2.prototype.onClicked = function(payload)
{
    var pos = this.shipIcon.getTileOnPosition(payload.game);
    this.dispatcher.dispatch({name:'click', position: pos});
};

model.ShipDisplay2.prototype.onMouseMove = function(payload)
{
    var pos = this.shipIcon.getTileOnPosition(payload.game);
    var tilePos = this.shipIcon.getClosestTilePosition(payload.game);
    this.dispatcher.dispatch({
        name:'mousemove',
        position: payload,
        tile:pos,
        tilePosition: tilePos
    });
};

model.ShipDisplay2.prototype.createViewModeButton = function(target)
{
    var button = jQuery('<div class="hoverbutton shipViewMode hull"></div>');
    button.on('click', this.toggleViewMode.bind(this, button));
    button.appendTo(target);
};

model.ShipDisplay2.prototype.toggleViewMode = function(button, event)
{
    event.stopPropagation();
    if (button.hasClass('hull'))
    {
        this.shipIcon.sprites.hull.show();
        button.removeClass('hull');
        button.addClass('grid');
    }
    else
    {
        this.shipIcon.sprites.hull.hide();
        button.removeClass('grid');
        button.addClass('hull');
    }
};

model.ShipDisplay2.prototype.update = function(shipDesign)
{
    console.log(shipDesign);

    this.shipIcon.create(shipDesign);

    if ( ! this.addedToScene)
    {
        console.log("adding to scene");
        this.gameScene.scene.add(this.shipIcon.getThreeObject());
        this.addedToScene = true;
    }
};

model.ShipDisplay2.prototype.destroy = function()
{

};




