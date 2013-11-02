Fleets = new Meteor.Collection("Fleets");

//@todo move this elsewhere
var denyAll = {
    insert: function () {
        return false;
    },

    update: function () {
        return true;
    },

    remove: function () {
        return false;
    }
};

Fleets.allow(denyAll);