Template.createShip.shipHulls = function()
{
    return HullLayouts.find({'published': true});
};

Template.shipHull.name = function()
{
    return this.name;
}

Template.shipHull.events({
    'click .createShip': function () {
        Meteor.call('ShipDesignInsert', this._id, function(err, result){
            Session.set('selected_ship', result);
            Session.set("selected_view", 'shipEditor');
        });
    }
});