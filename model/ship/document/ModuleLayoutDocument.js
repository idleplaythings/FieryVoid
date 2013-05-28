ModuleLayouts = new Meteor.Collection(
    "ModuleLayouts",
    {transform: function (doc) { return new model.ModuleLayout(doc); }}
);

ModuleLayouts.allow({
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
    ModuleLayoutInsert: function (img) {
        console.log("module layout insert");
        var layout = new model.ModuleLayout({moduleImgName:img});
        delete layout._id;
        return ModuleLayouts.insert(layout);
    },

    ModuleLayoutPublish: function(id, imgName)
    {
        ModuleLayouts.update(
            {$and: [{'published': true}, {'moduleImgName': imgName}]},
            {$set: {'published': false}}
        );

        ModuleLayouts.update(
            {'_id': id},
            {$set: {'published': true}}
        );
    },

    ModuleLayoutUpdate: function(id, data)
    {
        return ModuleLayouts.update(
            { _id: id },
            {$set: data}
        );
    },

    ModuleLayoutToggleDisabled: function(id, i)
    {
        console.log("set i: " + i);

        var found = ModuleLayouts.findOne(
            {$and: [{'_id': id}, {'disabledTiles': i}]}
        );

        if (found)
        {
            ModuleLayouts.update(
                {'_id': id},
                {$pull: {'disabledTiles': i}}
            );
        }
        else
        {
            ModuleLayouts.update(
                {'_id': id},
                {$push: {'disabledTiles': i}}
            );
        }
    },

    ModuleLayoutToggleOutside: function(id, i)
    {
        console.log("set i: " + i);

        var found = ModuleLayouts.findOne(
            {$and: [{'_id': id}, {'outsideTiles': i}]}
        );

        if (found)
        {
            ModuleLayouts.update(
                {'_id': id},
                {$pull: {'outsideTiles': i}}
            );
        }
        else
        {
            ModuleLayouts.update(
                {'_id': id},
                {$push: {'outsideTiles': i}}
            );
        }
    }
});

