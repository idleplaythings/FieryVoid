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

    hasSelectedShipDesign: function()
    {
        return Session.get("selected_shipDesign");
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

    isMyShipDesign: function()
    {
        return isMyShip(Session.get('selected_shipDesign'));
    },

    selectedShipOwnerName: function()
    {
        var owner = ShipDesigns.findOne(
            {_id:Session.get('selected_shipDesign')},
            {fields:{owner:1}}
        )

        if (! owner)
            return '';

        return displayName(Meteor.users.findOne({_id: owner}));
    },

    getFromSelectedLayout: function (name)
    {
        var id = Session.get("selected_shipDesign");
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

        var id = Session.get("selected_shipDesign");
        if (id)
        {
            var ship = new model.ShipDesign().load(id);
            if (ship)
            {
                if ( ! ship.validateVariable(name, value))
                {
                    jQuery(element).addClass("error");
                    return false;
                }

                ship.updateIfDifferent(name, value);

                jQuery(element).removeClass("error");
                return true;
            }
        }
    },

    handleDetailChange: function (name, value)
    {
        var id = Session.get("selected_shipDesign");
        if (id)
        {
            var ship = new model.ShipDesign().load(id);

            if (ship)
            {
                if ( ! ship.validateVariable(name, value))
                    return false;

                ship.updateIfDifferent(name, value);
                return true;
            }
        }
    },

    toggleDetail: function(name)
    {
        var id = Session.get("selected_shipDesign");
        if (id)
        {
            var ship = new model.ShipDesign().load(id);
            if (ship)
            {
                var value = ship[name];
                if (value !== true && value !== false)
                    throw "Only boolean values can be toggled";

                if ( ! ship.validateVariable(name, value))
                    return false;

                ship.updateIfDifferent(name, (! value));
                return true;
            }
        }
    },
};

