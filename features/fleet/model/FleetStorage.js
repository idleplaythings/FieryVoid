model.FleetStorage = function FleetStorage(shipStorage)
{
    this.shipStorage = shipStorage;
};

model.FleetStorage.prototype.insert = function(fleet)
{
    Fleets.insert(fleet.serialize());
};

model.FleetStorage.prototype.addShipToFleet = function(fleet, ship)
{
    this.shipStorage.addShipToFleet(fleet._id, ship);
};

model.FleetStorage.prototype.removeShipFromFleet = function(fleet, ship)
{
    this.shipStorage.removeShipFromFleet(fleet._id, ship);
};