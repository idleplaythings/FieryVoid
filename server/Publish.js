Meteor.publish(null, function () {
  return Meteor.users.find(this.userId, {fields: {isAdmin: 1}});
});

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

Meteor.publish("HullLayouts", function () {
    return HullLayouts.find({$or: [{"published": true}, {owner: this.userId}]});
});
