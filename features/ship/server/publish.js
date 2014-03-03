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

Meteor.publish("ModuleLayouts", function () {
    if (isAdminUser(this.userId))
        return ModuleLayouts.find({});

    return ModuleLayouts.find({"published": true});
});

Meteor.publish("ModuleImages", function () {
    return ModuleImages.find({});
});

Meteor.publish("HullLayouts", function () {
    if (isAdminUser(this.userId))
        return HullLayouts.find({});

    return HullLayouts.find({"published": true});
});

Meteor.publish("HullImages", function () {
    return HullImages.find({});
});

function isAdminUser(userId)
{
    return Meteor.users.findOne(userId, {fields: {isAdmin: 1}});
}