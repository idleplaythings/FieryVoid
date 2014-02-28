model.inputAction.DisplayRoutes = function DisplayRoutes(shipAnimationService)
{
    this._shipAnimationService = shipAnimationService;
    this._shipAniamtions = [];
};

model.inputAction.DisplayRoutes.prototype.onActivation = function()
{
    this._shipAnimationService.showAllRoutes();
}
