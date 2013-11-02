Template.shipHtmlEntry.name = function()
{
    return this.name;
};

Template.shipHtmlEntry.username = function()
{
    if (this.owner == Meteor.userId())
        return '';

    return displayName(Meteor.users.findOne({_id: this.owner}));
};


Template.smallShipImage.rendered = function(){
    var self = this;
    var target = jQuery(self.find('.shipImageTarget'));
    var ship = self.data;

    new model.ShipDesignIconOnCanvas(ship.shipDesign).drawTo(target);
};

