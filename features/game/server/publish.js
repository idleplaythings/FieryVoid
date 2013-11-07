Meteor.publish("currentGame", function (gameId) {
    return [
        Games.find({_id: gameId}),
        TimelineFutures.find({}),
        TimelinePasts.find({}),
        ShipsInGameCollection.find({gameId: gameId}),
        Fleets.find({currentGame: gameId}),
        ShipDesigns.find({}),
		HullImages.find({}),
        HullLayouts.find({}),
        ModuleImages.find({}),
        ModuleLayouts.find({})
    ];
});
