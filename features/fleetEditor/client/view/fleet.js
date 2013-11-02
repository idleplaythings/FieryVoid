Template.fleet.rendered = function()
{
	if ( ! Template.fleet.controller)
	{
		var fleetId = Session.get('active_fleet');
		var fleetStorage = dic.get('model.FleetStorage');
		Template.fleet.controller = new model.FleetEditor(
			jQuery('.fleetContainer'),
			jQuery('.shipEditor'),
			fleetStorage.getFleet(fleetId),
			dic.get('model.ShipStorage')
		);
	};
};

Template.fleet.destroyed = function()
{
    if (Template.fleet.controller)
	{
		Template.fleet.controller.destroy();
		Template.fleet.controller = null;
	}
};

Template.fleet.myShips = function()
{
    var shipDesignStorage = dic.get('model.ShipDesignStorage');
    var designs = ShipDesigns.find({owner: Meteor.userId()}).map(
        function(design)
        {
            return shipDesignStorage.createShipDesign(design);
        }
    );

    return designs;
};

Template.fleet.events({
    'click .selectable.shiplist': function () {
		var fleetId = Session.get('active_fleet');
		var shipId = new Meteor.Collection.ObjectID().toHexString();
		console.log("asking to add ship id", shipId);
		Meteor.call('addShipToFleet', this._id, fleetId, shipId);
    }
});
