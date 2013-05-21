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
        return true;
    }
});

Meteor.methods({
    HullLayoutInsert: function (img) {
        console.log("hull insert");
        var layout = new model.HullLayout({hullImgName:img});
        var args = layout.getArgsForInsert();
        console.log(args);
        return HullLayouts.insert(args);
    }
});

