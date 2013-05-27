Template.availableModuleListing.availableModules = function()
{
    return ModuleLayouts.find({'published': true});
};

Template.availableModuleListing.events({
    'click .remove': function () {
        Session.set('selected_module', 'remove');
    }
});

Template.availableModuleListing.selectedClass = function()
{
    return Session.get('selected_module') == 'remove' ? 'selected' : '';
};