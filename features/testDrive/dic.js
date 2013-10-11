dic.register('model.GameTestdrive', function(dic) {
    var id = new Meteor.Collection.ObjectID().toHexString();
    return new model.GameTestdrive({ _id: id });
});
