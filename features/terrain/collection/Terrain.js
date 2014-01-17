Terrain = new Meteor.Collection("Terrain");

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

Terrain.allow(denyAll);
