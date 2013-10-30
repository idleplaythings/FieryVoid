model.ShipDesignInGame = function ShipDesignInGame(args)
{
    model.ShipDesign.call(this, args);
};

model.ShipDesignInGame.prototype = Object.create(model.ShipDesign.prototype);

model.ShipDesignInGame.prototype.prepareForSave = function()
{
    this.hullLayoutId = this.hullLayout._id;
};
