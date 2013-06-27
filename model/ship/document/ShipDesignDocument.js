ShipDesigns = new Meteor.Collection(
    "ShipDesigns"
);

ShipDesigns.allow({
    insert: function () {
        return false;
    },

    update: function () {
        return false;
    },

    remove: function () {
        return false;
    }
});

Meteor.methods({
    ShipDesignInsert: function (hullLayoutId) {
        console.log("ship insert");

        var userid = Meteor.userId();

        if ( ! userid)
            throw new Meteor.Error(403, "You must be logged in to add a ship");

        var ship = {
            owner:userid,
            hullLayoutId: hullLayoutId,
            modules: []
        }

        return ShipDesigns.insert(ship);
    },

    ShipDesignAddModule: function(shipId, moduleId, modulePosition)
    {
        var userid = Meteor.userId();

        if ( ! userid)
            throw new Meteor.Error(403, "You must be logged in to edit a ship");

        var ship = new model.ShipDesign().load(shipId);

        if ( ! ship || ship.owner != userid)
            throw new Meteor.Error(404, "Ship id " + shipId + " not found!");

        var module = ModuleLayouts.findOne({'_id': moduleId});

        if ( ! module.isValidPosition(ship, modulePosition))
            throw new Meteor.Error(400, "Invalid module placement");

        ShipDesigns.update(
            {$and: [{'_id': shipId}, {'owner': userid}]},
            {$push: {'modules':
                {'module': moduleId, 'position': modulePosition}}
            }
        );
    },

    ShipDesignRemoveModule: function(shipId, moduleId, modulePosition)
    {
        var userid = Meteor.userId();

        if ( ! userid)
            throw new Meteor.Error(403, "You must be logged in to edit a ship");

        var ship = new model.ShipDesign().load(shipId);

        if ( ! ship || ship.owner != userid)
            throw new Meteor.Error(404, "Ship id " + shipId + " not found!");

        ShipDesigns.update(
            {$and: [{'_id': shipId}, {'owner': userid}]},
            {$pull: {'modules':
                {'module': moduleId, 'position': modulePosition}}
            }
        );
    },

    ShipDesignUpdate: function(shipId, name, value)
    {
        var userid = Meteor.userId();

        if ( ! userid)
            throw new Meteor.Error(403, "You must be logged in to edit a ship");

        var ship = new model.ShipDesign().load(shipId);

        if ( ! ship || ship.owner != userid)
            throw new Meteor.Error(404, "Ship id " + shipId + " not found!");

        if ( ! ship.validateVariable(name, value))
            throw new Meteor.Error(400, "Invalid name/value: '" + name +": " + value +"'");

        var updateObject = {};
        updateObject[name] = value;

        return ShipDesigns.update(
            {$and: [{'_id': shipId}, {'owner': userid}]},
            {$set: updateObject}
        );
    },
});

