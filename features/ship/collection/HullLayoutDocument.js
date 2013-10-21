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

Meteor.methods({
    HullLayoutInsert: function (img) {
        console.log("insert");
        if (! isAdminUser())
            throw new Meteor.Error(403, "You must be admin to edit hull layouts");

        console.log("is admin, apparently");
        var layout = new model.HullLayout({hullImgName:img});
        delete layout._id;
        return HullLayouts.insert(layout);
    },

    HullLayoutPublish: function(id, imgName)
    {
        if (! isAdminUser())
            throw new Meteor.Error(403, "You must be admin to edit hull layouts");

        HullLayouts.update(
            {$and: [{'published': true}, {'hullImgName': imgName}]},
            {$set: {'published': false}}
        );

        HullLayouts.update(
            {'_id': id},
            {$set: {'published': true}}
        );
    },

    HullLayoutUpdate: function(id, data)
    {
        if (! isAdminUser())
            throw new Meteor.Error(403, "You must be admin to edit hull layouts");

        return HullLayouts.update(
            { _id: id },
            {$set: data}
        );
    },

    HullLayoutToggleDisabled: function(id, i)
    {
        if (! isAdminUser())
            throw new Meteor.Error(403, "You must be admin to edit hull layouts");

        var found = HullLayouts.findOne(
            {$and: [{'_id': id}, {'disabledTiles': i}]}
        );

        if (found)
        {
            HullLayouts.update(
                {'_id': id},
                {$pull: {'disabledTiles': i}}
            );
        }
        else
        {
            HullLayouts.update(
                {'_id': id},
                {$pull: {'tileHeights': {'tile': i}}}
            );

            HullLayouts.update(
                {'_id': id},
                {$push: {'disabledTiles': i}}
            );
        }
    },

    HullLayoutSetTileHeight: function(id, i, height)
    {
        if (! isAdminUser())
            throw new Meteor.Error(403, "You must be admin to edit hull layouts");

        HullLayouts.update(
            {'_id': id},
            {$pull: {'tileHeights': {'tile': i}}}
        );

        if (height > 1)
        {
            HullLayouts.update(
                {'_id': id},
                {$push: {'tileHeights': {'tile': i, 'height': height}}}
            );
        }
    }
});

