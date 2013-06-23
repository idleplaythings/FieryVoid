ModuleImages = new Meteor.Collection(
    "ModuleImages",
    {transform: function (doc) { return new model.ModuleImage(doc); }}
);

ModuleImages.allow({
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

ModuleImageStorage =
{
    insert: function(name, inside, outside, hull, over, under)
    {
        if (ModuleImages.findOne({name: name}))
        {
            ModuleImages.update(
                {name: name},
                {$set:{
                    inside:inside,
                    outside:outside,
                    hull: hull,
                    over: over,
                    under: under
                }}
            );
        }
        else
        {
            ModuleImages.insert({
                name: name,
                inside:inside,
                outside:outside,
                hull: hull,
                over: over,
                under: under
            });
        }
    },

    findByName: function(name)
    {
        return ModuleImages.findOne({name: name});
    },

    removeAll: function()
    {
        ModuleImages.remove({});
    }
}
