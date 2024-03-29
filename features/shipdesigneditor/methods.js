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

    ShipDesignAddArmor: function(shipId, tile1, tile2, armorClass)
    {
        var userid = Meteor.userId();

        if ( ! userid)
            throw new Meteor.Error(403, "You must be logged in to edit a ship design");

        var shipDesignStorage = dic.get('model.ShipDesignStorage');
        var shipDesign = shipDesignStorage.getShipDesign(shipId);

        if ( ! shipDesign || shipDesign.owner != userid)
            throw new Meteor.Error(404, "Ship id " + shipId + " not found!");


        var armor = null;

        if (armorClass)
            armor = dic.get(armorClass);
        
        shipDesign.setArmor(tile1, tile2, armor);

        ShipDesigns.update(
            {$and: [{'_id': shipId}, {'owner': userid}]},
            {$set: {'armor': shipDesign.serializeArmor()}}
        );
    },

    ShipDesignAddModule: function(shipId, moduleId, direction, modulePosition)
    {
        var userid = Meteor.userId();

        if ( ! userid)
            throw new Meteor.Error(403, "You must be logged in to edit a ship design");

        var shipDesignStorage = dic.get('model.ShipDesignStorage');
        var shipDesign = shipDesignStorage.getShipDesign(shipId);

        if ( ! shipDesign || shipDesign.owner != userid)
            throw new Meteor.Error(404, "Ship id " + shipId + " not found!");

        var module = dic.get('model.ModuleLayoutRepository').getModuleLayout(moduleId);
        module.setDirection(direction);

        if ( ! dic.get('model.ShipDesignEditorService').isValidPosition(modulePosition, module, shipDesign))
            throw new Meteor.Error(400, "Invalid module placement");

        ShipDesigns.update(
            {$and: [{'_id': shipId}, {'owner': userid}]},
            {$push: {'modules':{
            'moduleIdOnShip': new Meteor.Collection.ObjectID().toHexString(),
                'module': moduleId,
                'position': modulePosition,
                'direction': direction
                }}
            }
        );
    },

    ShipDesignRemoveModule: function(shipId, moduleId, modulePosition)
    {
        var userid = Meteor.userId();

        if ( ! userid)
            throw new Meteor.Error(403, "You must be logged in to edit a ship");

        var shipDesignStorage = dic.get('model.ShipDesignStorage');
        var ship = shipDesignStorage.getShipDesign(shipId);

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

        var shipDesignStorage = dic.get('model.ShipDesignStorage');
        var ship = shipDesignStorage.getShipDesign(shipId);

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
