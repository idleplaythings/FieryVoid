ModuleImages = new Meteor.Collection("ModuleImages");

ModuleImageStorage =
{
    insert: function(name)
    {
        ModuleImages.insert({img: name});
    },

    findByName: function(name)
    {
        return ModuleImages.findOne({img: name});
    },

    removeAll: function()
    {
        ModuleImages.remove({});
    }

}
