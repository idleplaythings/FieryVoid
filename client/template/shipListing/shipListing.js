Template.shipListing.shipsForListing = function()
{
    return this.getShips();
};

Template.shipListEntry.name = function()
{
    return this.name;
}

Template.shipListEntry.events({
    'click .selectable': function () {
      Meteor.Router.to('shipEditor', this);
    }
});