Games = new Meteor.Collection("Games");

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

Games.allow(denyAll);
