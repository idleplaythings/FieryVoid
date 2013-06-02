ModuleImages = new Meteor.Collection(
    "ModuleImages",
    {transform: function (doc) { return new model.ModuleImage(doc); }}
);

ModuleImageStorage =
{
    insert: function(name, inside, outside, hull)
    {
        if (ModuleImages.findOne({name: name}))
        {
            ModuleImages.update(
                {name: name},
                {$set:{
                    inside:inside,
                    outside:outside,
                    hull: hull
                }}
            );
        }
        else
        {
            ModuleImages.insert({
                name: name,
                inside:inside,
                outside:outside,
                hull: hull
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
