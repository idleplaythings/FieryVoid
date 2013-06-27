model.ShipMass = function ShipMass(shipDesign)
{
    this.shipDesign = shipDesign;
}

model.ShipMass.prototype.calculateCenterOfMass = function()
{
    var weights = [];
    this.shipDesign.modules.forEach(
        function(module)
        {
            weights.push(module.getWeightWithPosition());
        }
    );

    return {x:0, y:0};
}