model.ModuleLayoutPositionService = function ModuleLayoutPositionService(module, position, facing)
{
    model.ComponentPositionService.call(
        this,
        module.getWidth(),
        module.getHeight(),
        position,
        facing
    );

	this._module = module;
};

model.ModuleLayoutPositionService.prototype = Object.create(model.ComponentPositionService.prototype);

model.ModuleLayoutPositionService.prototype.occupiesPosition = function(scenePosition)
{
    var tile = this.getTileOnPosition(scenePosition);
    return this._module.occupiesPosition(tile);
};