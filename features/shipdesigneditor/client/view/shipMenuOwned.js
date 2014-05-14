Template.shipMenuOwned = _.extend(Template.shipMenuOwned, BaseTemplate);

Template.shipMenuOwned.designName = function()
{
    return Template.shipMenuOwned.getFromSelectedLayout('name');
};

Template.shipMenuOwned.events({
    'blur input': function (event) {
        Template.shipMenuOwned.handleInputDetailChange(event.currentTarget);
    },
    'click .publish': function(event) {
        console.log("clicked publish");
        Template.shipMenuOwned.toggleDetail('public');
    },
    'click .testdrive': function(event, template) {
        console.log("Testdrive");
        Meteor.call(
            'TestdriveStart',
            template.data.shipDesignId,
            function(err, result) {
                if (err) {
                    console.log(err);
                    return false;
                }
                Router.go('loadGame', result);
            }
        );

    }
});

Template.shipMenuOwned.publishedClass = function()
{
    return '';
};

Template.shipMenuOwned.selectedShipMass = function()
{
    return '';
};
