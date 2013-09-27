ShipDesigns = new Meteor.Collection("ShipDesigns");

//@todo move this elsewhere
var denyAll = {
    insert: function () {
        return false;
    },

    update: function () {
        return false;
    },

    remove: function () {
        return false;
    }
};

ShipDesigns.allow(denyAll);
