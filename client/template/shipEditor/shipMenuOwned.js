Template.shipMenuOwned = _.extend(Template.shipMenuOwned, BaseTemplate);

Template.shipMenuOwned.designName = function()
{
    return getFromSelectedLayout('name');
};

Template.shipMenuOwned.events({
    'blur input': function (event) {
        handleDetailChange(event.currentTarget);
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
    return getFromSelectedLayout('published') ? 'active' : '';
};

function getFromSelectedLayout(name)
{
    var id = Session.get("selected_ship");
    if (id)
    {
        var ship = ShipDesigns.findOne({_id: id});
        if (ship && ship[name])
            return ship[name];
    }

    return '';
}

function handleDetailChange(element)
{
    var name = jQuery(element).attr('name');
    var value = jQuery(element).val();

    var id = Session.get("selected_ship");
    if (id)
    {
        var ship = ShipDesigns.findOne({_id: id});
        if (ship)
        {
            ship.updateIfDifferent(name, value);
        }
    }
}