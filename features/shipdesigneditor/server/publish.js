Meteor.publish("shipDesign", function (id) {
    return [
		ShipDesigns.find({_id: id}),
		HullImages.find({}),
        HullLayouts.find({}),
        ModuleImages.find({}),
        ModuleLayouts.find({})
    ];
});
