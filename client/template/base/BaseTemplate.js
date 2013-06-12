BaseTemplate = {

    width: function()
    {
        return window.innerWidth - 400;
    },

    height: function()
    {
        return window.innerHeight - 30;
    },

    hasSelectedHullLayout: function()
    {
        return Session.get("selected_hullLayout");
    },

    hasSelectedShip: function()
    {
        return Session.get("selected_ship");
    },

    hasSelectedModuleLayout: function()
    {
        return Session.get("selected_moduleLayout")
    },

    isAdmin: function()
    {
        var user = Meteor.user();
        return user && user.isAdmin;
    },

    isMyShip: function()
    {
        var user = Meteor.user();
        var ship = ShipDesigns.findOne({_id: Session.get("selected_ship")})

        return user && (user.isAdmin || (ship && ship.owner == user._id));
    }
};


