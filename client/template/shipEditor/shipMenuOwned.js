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
    'click .testdrive': function(event) {
        console.log("Testdrive");
        Meteor.call(
            'TestdriveStart',
            Session.get('selected_ship'),
            function(err, result){
                Meteor.Router.to('/game/'+result);
            }
        );

    }
});

Template.shipMenuOwned.publishedClass = function()
{
    return Template.shipMenuOwned.getFromSelectedLayout('public')
        ? 'active' : '';
};

Template.shipMenuOwned.selectedShipMass = function()
{
    var id = Session.get("selected_ship");
    if (id)
    {

        var ship = new model.ShipDesign().load(id);
        if (ship)
            return ' ' + ship.getMass() + ' ';
    }

    return '';
};