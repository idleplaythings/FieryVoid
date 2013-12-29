model.ModuleLayoutOnShip = function ModuleLayoutOnShip(args, ship)
{
    model.ModuleLayout.call(this, args);
    this.ship = ship;
};

model.ModuleLayoutOnShip.prototype = Object.create(model.ModuleLayout.prototype);

model.ModuleLayoutOnShip.prototype.serialize = function()
{
    return {
        module: this._id,
        position: this.position,
        direction: this.direction
    };
};
