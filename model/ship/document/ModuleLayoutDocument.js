ModuleLayouts = new Meteor.Collection(
    "ModuleLayouts",
    {transform: function (doc) {
        var moduleLayout = new model.ModuleLayout();
        _.extend(moduleLayout, doc);

        var image = ModuleImages.findOne({name: moduleLayout.image})
        if (! image)
            return null;

        moduleLayout.image = image;
        return moduleLayout;
    }}
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

        if (! isAdminUser())
            throw new Meteor.Error(403, "You must be admin to edit hull layouts");

        var layout = new model.ModuleLayout();
        layout.image = img;
        delete layout._id;
        return ModuleLayouts.insert(layout);
    },

    ModuleLayoutPublish: function(id, imgName)
    {
        if (! isAdminUser())
            throw new Meteor.Error(403, "You must be admin to edit hull layouts");

        ModuleLayouts.update(
            {$and: [{'published': true}, {'image': imgName}]},
            {$set: {'published': false}}
        );

        ModuleLayouts.update(
            {'_id': id},
            {$set: {'published': true}}
        );
    },

    ModuleLayoutUpdate: function(id, data)
    {
        if (! isAdminUser())
            throw new Meteor.Error(403, "You must be admin to edit hull layouts");

        return ModuleLayouts.update(
            { _id: id },
            {$set: data}
        );
    },

    ModuleLayoutToggleDisabled: function(id, i)
    {
        if (! isAdminUser())
            throw new Meteor.Error(403, "You must be admin to edit hull layouts");

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
        if (! isAdminUser())
            throw new Meteor.Error(403, "You must be admin to edit hull layouts");

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

