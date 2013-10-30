Meteor.methods({
    TestdriveStart: function (shipId) {

        var gameStorage = dic.get('model.GameStorage');

        console.log("testdrive start");

        var userid = Meteor.userId();

        var shipDesignStorage = dic.get('model.ShipDesignStorage');
        var shipDesign = shipDesignStorage.getShipDesign(shipId);

        if ( ! shipDesign || shipDesign.owner != userid)
            throw new Meteor.Error(404, "Ship id " + shipId + " not found!");

        var game = dic.get('model.GameTestdrive');
        game.setState({ _id: new Meteor.Collection.ObjectID().toHexString() });

        var initialInsert = game.getInitialInsert();
        gameStorage.insert(initialInsert);

        game._id = initialInsert._id;

        game.setStartingConditions(shipDesign);
        game.addPlayer(userid);
        game.addTestDriveShip(shipDesign);

        return game;
    }
});
