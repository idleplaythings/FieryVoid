Template.shipListing.shipsForListing = function()
{
    return ShipDesigns.find({'owner': Meteor.userId()});
};

Template.shipListEntry.name = function()
{
    return this.name;
}

Template.shipListEntry.events({
    'click .selectable': function () {
        console.log("click");
        console.log(this);
        Session.set("selected_ship", this._id);
        Session.set("selected_view", 'shipEditor');
    }
});