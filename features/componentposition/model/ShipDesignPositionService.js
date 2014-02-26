model.ShipDesignPositionService = function ShipDesignPositionService(shipDesign, position, facing)
{
    model.ComponentPositionService.call(
        this,
        shipDesign.hullLayout.getWidth(),
        shipDesign.hullLayout.getHeight(),
        position,
        facing
    );

	this._shipDesign = shipDesign;
};

model.ShipDesignPositionService.prototype = Object.create(model.ComponentPositionService.prototype);

model.ShipDesignPositionService.prototype.normalize = function()
{
    return new model.ShipDesignPositionService(this._shipDesign);
};

model.ShipDesignPositionService.prototype.occupiesPosition = function(scenePosition)
{
    var tile = this.getTileOnPosition(scenePosition);
    return ! this._shipDesign.hullLayout.isUnavailableTile(tile);
};

model.ShipDesignPositionService.prototype.getModuleCenterPositionInScene = function(module)
{
    if (! (module instanceof model.ModuleLayout))
        module = module.getModuleLayout();

	return this.getTilePositionInScene(module.getCenterPosition(), this._position, this._facing);
};

model.ShipDesignPositionService.prototype.getModuleOnPosition = function(scenePosition)
{
    var tile = this.getTileOnPosition(scenePosition);
    var modules = this._shipDesign.modules;
    for (var i in modules)
    {
        var module = modules[i];
        if (module.occupiesPosition(tile))
            return module;
    }

    return null;
};