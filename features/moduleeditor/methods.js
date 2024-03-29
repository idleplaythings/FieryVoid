
Meteor.methods({
    ModuleLayoutInsert: function () {

        if (! isAdminUser())
            throw new Meteor.Error(403, "You must be admin to edit hull layouts");

        var layout = new model.ModuleLayout();
        delete layout._id;
        return ModuleLayouts.insert(layout);
    },

    ModuleLayoutPublish: function(id)
    {
        if (! isAdminUser())
            throw new Meteor.Error(403, "You must be admin to edit hull layouts");

        var current = ModuleLayouts.findOne({'_id': id}).published;

        ModuleLayouts.update(
            {'_id': id},
            {$set: {'published': ! current}}
        );
    },

    ModuleLayoutUpdate: function(id, data, trait)
    {
        if (! isAdminUser())
            throw new Meteor.Error(403, "You must be admin to edit hull layouts");

        console.log(data);

        if (trait)
        {
            for (var name in data) break;

            console.log("updating trait with name '" + name +"'");
            var found = ModuleLayouts.findOne(
                {$and: [{'_id': id}, {'traits.name': name}]}
            );

            if (found)
            {
                console.log("remove");
                ModuleLayouts.update(
                    {$and: [{'_id': id}, {'traits.name': name}]},
                    {$pull: {'traits' :{'name': name}}}
                );
            }

            if (data[name])
            {
                console.log("add");
                ModuleLayouts.update(
                    {'_id': id},
                    {$push: {'traits': {'name': name, 'value': data[name]}}}
                );
            }
        }
        else
        {
            return ModuleLayouts.update(
                { _id: id },
                {$set: data}
            );
        }
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