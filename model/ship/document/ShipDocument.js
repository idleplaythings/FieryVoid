ShipDesigns = new Meteor.Collection(
    "ShipDesigns",
    {transform: function (doc) {
        var hullLayout = HullLayouts.findOne({'_id': doc.hullLayoutId})
        var modules = [];

        if (Array.isArray(doc.modules))
        {
            doc.modules.forEach(function(moduleAndPos)
            {
                var module = ModuleLayouts.findOne(
                    {'_id': moduleAndPos.module});

                module.setPosition(moduleAndPos.position);

                modules.push(module);

            });

            doc.modules = modules;
        }

        return new model.Ship(doc, hullLayout);
    }}
);

ShipDesigns.allow({
    insert: function () {
        return false;
    },

    update: function () {
        return true;
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

        ShipDesigns.update(
            {$and: [{'_id': shipId}, {'owner': userid}]},
            {$pull: {'modules':
                {'module': moduleId, 'position': modulePosition}}
            }
        );
    }
});

