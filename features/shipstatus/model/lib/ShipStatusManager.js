if ( typeof model === 'undefined')
    model = {};

model.ShipStatusManager = function ShipStatusManager()
{

}

model.ShipStatusManager.prototype.subscribeToScene = function(
    gameScene, effectManager, dispatcher, uiResolver, gridService)
{
    this.gameScene = gameScene;
    this.effectManager = effectManager;
    this.dispatcher = dispatcher;
    this.uiResolver = uiResolver;
    this.gridService = gridService;
};

model.ShipStatusManager.prototype.getActionButtons = function()
{
    return [];
};