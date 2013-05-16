HullImages = new Meteor.Collection("HullImages");

HullImageStorage =
{
    insert: function(name)
    {
        HullImages.insert({img: name});
    },

    findByName: function(name)
    {
        return HullImages.findOne({img: name});
    },

    removeAll: function()
    {
        HullImages.remove({});
    }

}
