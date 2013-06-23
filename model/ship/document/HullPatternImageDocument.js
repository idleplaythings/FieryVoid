HullPatternImages = new Meteor.Collection("HullPatternImages");

HullPatternImages.allow({
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

HullPatternImageStorage =
{
    insert: function(name)
    {
        HullPatternImages.insert({
            name: name,
        });
    },

    removeAll: function()
    {
        HullPatternImages.remove({});
    }

}
