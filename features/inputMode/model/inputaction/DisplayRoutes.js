model.inputAction.DisplayRoutes = function DisplayRoutes(shipAnimationService, gameState)
{
    this._shipAnimationService = shipAnimationService;
    this._shipAniamtions = [];
    this._gameState = gameState;
    this.zoom = 1.0;
};

model.inputAction.DisplayRoutes.prototype.onActivation = function()
{
    this._shipAnimationService.showAllRoutes(this._gameState.getTurn());
};

model.inputAction.DisplayRoutes.prototype.onDeactivation = function()
{
    this._shipAnimationService.hideAllRoutes();
};

model.inputAction.DisplayRoutes.prototype.onZoom = function(event)
{
  /*
  var zoom = event.zoom;
  if (zoom == 1)
    this._shipAnimationService.hideAllRoutes();
  else
  */
};
