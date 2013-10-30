Template.shipMenu = _.extend(Template.shipMenu, BaseTemplate);

Template.shipMenu.myShips = function()
{
    var shipDesignStorage = dic.get('model.ShipDesignStorage');
    var designs = ShipDesigns.find({owner: Meteor.userId()}).map(
        function(design)
        {
            return shipDesignStorage.createShipDesign(design);
        }
    );

    console.log(designs);
    return designs;
};

Template.shipMenu.publicShips = function()
{
    var shipDesignStorage = dic.get('model.ShipDesignStorage');
    var userId = Meteor.userId();
    var designs = ShipDesigns
        .find(
            {$and: [{public: true}, {owner: {$not: userId}}]})
        .map(
            function(design)
            {
                return shipDesignStorage.createShipDesign(design);
            }
    );

    console.log(designs);
    return designs;
};