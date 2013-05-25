Template.createShip.shipHulls = function()
{
    return HullLayouts.find({'published': true});
};

Template.shipHull.name = function()
{
    return this.name;
}
