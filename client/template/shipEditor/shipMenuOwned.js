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
        console.log("clicked publish");
        Template.shipMenuOwned.toggleDetail('public');
    }
});

Template.shipMenuOwned.publishedClass = function()
{
    return Template.shipMenuOwned.getFromSelectedLayout('public')
        ? 'active' : '';
};