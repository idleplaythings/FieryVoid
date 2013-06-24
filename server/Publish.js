Meteor.publish(null, function () {
  return Meteor.users.find(this.userId, {fields: {isAdmin: 1}});
});

Meteor.publish("directory", function () {
    return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});

Meteor.publish("ShipDesigns", function () {
    return ShipDesigns.find(
        {$or: [{"public": true}, {owner: this.userId}]});
});

Meteor.publish("HullImages", function () {
    return HullImages.find({});
});

Meteor.publish("HullLayouts", function () {
    if (isAdminUser())
        return HullLayouts.find({});

    return HullLayouts.find({"published": true});
});

Meteor.publish("ModuleImages", function () {
    return ModuleImages.find({});
});

Meteor.publish("ModuleLayouts", function () {
    if (isAdminUser())
        return ModuleLayouts.find({});

    return ModuleLayouts.find({"published": true});
});

function isAdminUser()
{
    return Meteor.users.findOne(this.userId, {fields: {isAdmin: 1}});
}
