Meteor.publish("myFleet", function (fleetId) {

    return [
        Fleets.find({owner: this.userId}),
        ShipsInGameCollection.find({fleetId: fleetId}),
        ShipDesigns.find({owner: this.userId}),
        HullImages.find({}),
        HullLayouts.find({}),
        ModuleImages.find({}),
        ModuleLayouts.find({})
    ];
});
