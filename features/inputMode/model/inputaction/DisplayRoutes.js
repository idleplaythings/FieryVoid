model.inputAction.DisplayRoutes = function DisplayRoutes(shipAnimationService)
{
    this._shipAnimationService = shipAnimationService;
    this._shipAniamtions = [];
};

model.inputAction.DisplayRoutes.prototype.onActivation = function()
{
    this._getShipAnimations();
    this._displayShipAnimations();
}

model.inputAction.DisplayRoutes.prototype._getShipAnimations = function()
{
    this._shipAnimations = this._shipAnimationService.getShipAnimations();
}

model.inputAction.DisplayRoutes.prototype._displayShipAnimations = function()
{
    this._shipAnimations.forEach(function(animation) {
        animation.showRoute();
    });
}
