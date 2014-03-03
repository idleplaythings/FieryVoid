HullLayouts = new Meteor.Collection(
    "HullLayouts",
    {transform: function (doc) { return new model.HullLayout(doc); }}
);

HullLayouts.allow({
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
