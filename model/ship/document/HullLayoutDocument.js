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
        console.log("hull insert");
        var layout = new model.HullLayout({hullImgName:img});
        delete layout._id;
        return HullLayouts.insert(layout);
    },

    HullLayoutPublish: function(id, imgName)
    {
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
        console.log('hull update');
        console.log(id);
        console.log(data);

        return HullLayouts.update(
            { _id: id },
            {$set: data}
        );
    },

    HullLayoutToggleDisabled: function(id, i)
    {
        console.log("set i: " + i);

        var found = HullLayouts.findOne(
            {$and: [{'_id': id}, {'disabledTiles': i}]}
        );

        if (found)
        {
            console.log("found ");
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
        console.log("set i: " + i + " height to: " + height);

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

