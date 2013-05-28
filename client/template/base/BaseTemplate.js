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
    }
};


