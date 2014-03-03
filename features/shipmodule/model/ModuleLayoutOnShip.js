model.ModuleLayoutOnShip = function ModuleLayoutOnShip(idOnShip, args, ship)
{
    model.ModuleLayout.call(this, args);
    this.idOnShip = idOnShip;
    this.ship = ship;
};

model.ModuleLayoutOnShip.prototype = Object.create(model.ModuleLayout.prototype);

model.ModuleLayoutOnShip.prototype.serialize = function()
{
    return {
        moduleIdOnShip: this.idOnShip,
        module: this._id,
        position: this.position,
        direction: this.direction
    };
};
