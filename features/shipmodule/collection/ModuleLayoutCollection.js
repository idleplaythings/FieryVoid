ModuleLayouts = new Meteor.Collection("ModuleLayouts");

ModuleLayouts.allow({
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

