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
        var hullLayoutId = Session.get("selected_hullLayout");
        if (hullLayoutId)
        {
            var layout = HullLayouts.findOne({_id: hullLayoutId});
            if (layout)
            {
                layout.publish();
            }
        }
    }
});

Template.shipMenuOwned.publishedClass = function()
{
    return Template.shipMenuOwned.getFromSelectedLayout('published')
        ? 'active' : '';
};