Meteor.methods({
    TestdriveStart: function (shipId) {
        console.log("testdrive start");

        var userid = Meteor.userId();

        var shipDesign = new model.ShipDesignInGame().load(shipId);

        if ( ! shipDesign || shipDesign.owner != userid)
            throw new Meteor.Error(404, "Ship id " + shipId + " not found!");

        var game = dic.get('model.GameTestdrive');
        game.setState({ _id: new Meteor.Collection.ObjectID().toHexString() });

        var initialInsert = game.getInitialInsert();
        var gameStorage = dic.get('model.GameStorage');
        gameStorage.insert(initialInsert);

        game._id = initialInsert._id;

        game.setStartingConditions(shipDesign);
        game.addPlayer(userid);



        game.addTestDriveShip(shipDesign);

        return game;
    }
});
