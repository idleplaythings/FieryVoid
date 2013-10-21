HullImages = new Meteor.Collection("HullImages");

HullImages.allow({
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
