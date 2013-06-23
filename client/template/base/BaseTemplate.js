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
        var owner = Session.get("selected_ship_owner");

        return user && (user.isAdmin || (owner == user._id));
    },

    selectedShipOwnerName: function()
    {
        return Session.get("selected_ship_owner_name");
    },

    getFromSelectedLayout: function (name)
    {
        var id = Session.get("selected_ship");
        if (id)
        {
            var ship = ShipDesigns.findOne({_id: id});
            if (ship && ship[name])
                return ship[name];
        }

        return '';
    },

    handleInputDetailChange: function (element)
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
    },

    handleDetailChange: function (name, value)
    {
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
};


