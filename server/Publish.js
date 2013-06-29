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

Meteor.publish("currentGame", function (gameId) {

    return Games.find({_id: gameId});
});

Meteor.publish("shipDesigns", function () {

    return [
        ShipDesigns.find({}),
            //{$or: [{"public": true}, {owner: this.userId}]}),
        HullImages.find({}),
        HullLayouts.find({"published": true}),
        ModuleImages.find({}),
        ModuleLayouts.find({"published": true})
    ];
});

Meteor.publish("HullLayoutsAdmin", function () {
    if (isAdminUser(this.userId))
        return HullLayouts.find({});

    return HullLayouts.find({"published": true});
});

Meteor.publish("ModuleLayoutsAdmin", function () {
    if (isAdminUser(this.userId))
        return ModuleLayouts.find({});

    return ModuleLayouts.find({"published": true});
});

function isAdminUser(userId)
{
    return Meteor.users.findOne(userId, {fields: {isAdmin: 1}});
}
