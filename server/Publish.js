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

Meteor.publish("shipDesigns", function () {

    return [
        ShipDesigns.find({}),
            //{$or: [{"public": true}, {owner: this.userId}]}),
        HullImages.find({}),
        HullLayouts.find({}),
        ModuleImages.find({}),
        ModuleLayouts.find({})
    ];
});

Meteor.publish("HullLayoutsAdmin", function () {
    if (isAdminUser(this.userId))
        return HullLayouts.find({});

    return HullLayouts.find({"published": true});
});

Meteor.publish("ModuleLayoutsAdmin", function () {

    var modules = (isAdminUser(this.userId)) ? ModuleLayouts.find({}) : ModuleLayouts.find({"published": true});
    
    return [
		modules,
		ModuleImages.find({})
    ];
});

function isAdminUser(userId)
{
    return Meteor.users.findOne(userId, {fields: {isAdmin: 1}});
}
