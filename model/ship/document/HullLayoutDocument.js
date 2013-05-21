HullLayouts = new Meteor.Collection(
    "HullLayouts",
    {transform: function (doc) { return new model.HullLayout(doc); }}
);

HullLayouts.allow({
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
    HullLayoutInsert: function (img) {
        console.log("hull insert");
        var layout = new model.HullLayout({hullImgName:img});
        var args = layout.getArgsForInsert();
        console.log(args);
        return HullLayouts.insert(args);
    },

    HullLayoutUpdate: function(id, data)
    {
        console.log('hull update');
        console.log(id);
        console.log(data);

        return HullLayouts.update(
            { _id: id },
            {$set: data}
        );
    }
});

