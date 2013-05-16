Meteor.publish("directory", function () {
    return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});

Meteor.publish("ShipLayouts", function () {
    return ShipLayouts.find(
        {$or: [{"public": true}, {owner: this.userId}]});
});

Meteor.publish("HullImages", function () {
    return HullImages.find({});
});
