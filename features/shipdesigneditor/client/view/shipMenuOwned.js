Template.shipMenuOwned = _.extend(Template.shipMenuOwned, BaseTemplate);

Template.shipMenuOwned.designName = function()
{
    return Template.shipMenuOwned.getFromSelectedLayout('name');
};

Template.shipMenuOwned.events({
    'blur input': function (event, template) {
        handleDetailChange(event.currentTarget, template.data.ship);
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

function handleDetailChange(element, ship)
{
    if (! ship)
        return;

    var name = jQuery(element).attr('name');
    var value = jQuery(element).val();
    value = value.trim();

    dic.get('model.ShipDesignEditorService').update(ship.shipDesign, name, value);
    
};

Template.shipMenuOwned.publishedClass = function()
{
    return '';
};

Template.shipMenuOwned.selectedShipMass = function()
{
    return '';
};
