model.Fleet = function Fleet(args, timeline, fleetStorage, shipStorage)
{
    if ( ! args)
        args = {};

    this._id = args._id || null;
    this.owner = args.owner || null;
    this.created = args.created || Date.now();
    this.ships = args.ships || [];
    this.currentGame = args.currentGame || null;
    this.timeline = timeline;

    
    this.fleetStorage = fleetStorage;
    this.shipStorage = shipStorage;
};

model.Fleet.prototype.serialize = function()
{
	return {
		owner: this.owner,
		created: this.created
	};
};

model.Fleet.prototype.addShip = function(ship)
{
	console.log("addShip");
	console.log(this.ships);
	this.ships.push(ship);
	
	if (Meteor.isServer)
		this.shipStorage.addShipToFleet(ship, this._id);
};

model.Fleet.prototype.addToGame = function(game)
{
	this.fleetStorage.addFleetToGame(this._id, game._id);
};

model.Fleet.prototype.getReactiveShips = function(callback)
{
	return this.fleetStorage.getReactiveShipsInFleet(this, callback);
};
