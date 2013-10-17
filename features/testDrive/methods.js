Meteor.methods({
    TestdriveStart: function (shipId) {
        console.log("testdrive start");

        var userid = Meteor.userId();

        var shipDesign = new model.ShipDesignInGame().load(shipId);

        if ( ! shipDesign || shipDesign.owner != userid)
            throw new Meteor.Error(404, "Ship id " + shipId + " not found!");

        var id = new Meteor.Collection.ObjectID().toHexString();

        var game = dic.get('model.GameTestdrive');

        game.setStartingConditions(shipDesign);
        game.addPlayer(userid);

        new model.GameStorage().insert(Games.insert(game.getInitialInsert()));
        game.addTestDriveShip(shipDesign);
        return game._id;
    }
});
