dic.register('model.Game', function(dic) {
    var id = new Meteor.Collection.ObjectID().toHexString();
    return new model.Game({ _id: id });
});
