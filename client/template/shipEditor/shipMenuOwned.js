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
                console.log(err);
                console.log(result);
                console.log("testdrive done");
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