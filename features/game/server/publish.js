Meteor.publish("currentGame", function (gameid) {
    return [
        Games.find({_id: gameid}),
        TimelineFutures.find({}),
        TimelinePasts.find({}),
        ShipsInGameCollection.find({gameid: gameid})
    ];
});

foo = "bar";