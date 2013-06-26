Meteor.publish(null, function () {
  return Meteor.users.find(
      this.userId,
      {fields: {isAdmin: 1,emails: 1, profile: 1}});
});

Meteor.publish(null, function () {
    return Meteor.users.find(
        {},
        {fields: {emails: 1, profile: 1}});
});

Meteor.publish("ShipDesigns", function () {
    return ShipDesigns.find(
        {$or: [{"public": true}, {owner: this.userId}]});
});

Meteor.publish("HullImages", function () {
    return HullImages.find({});
});

Meteor.publish("HullLayouts", function () {
    if (isAdminUser(this.userId))
        return HullLayouts.find({});

    return HullLayouts.find({"published": true});
});

Meteor.publish("ModuleImages", function () {
    return ModuleImages.find({});
});

Meteor.publish("ModuleLayouts", function () {
    if (isAdminUser(this.userId))
        return ModuleLayouts.find({});

    return ModuleLayouts.find({"published": true});
});

function isAdminUser(userId)
{
    return Meteor.users.findOne(userId, {fields: {isAdmin: 1}});
}
