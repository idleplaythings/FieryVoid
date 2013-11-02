Template.shipDesignEditor.created = function()
{
    console.log("shipDesignEditor created");
}

Template.shipDesignEditor.rendered = function()
{
    if ( ! Template.shipDesignEditor.controller)
    {
        var shipDesignId = Session.get("selected_ship");
        var leftmenu = jQuery('.sidemenu.left');
        var shipview = jQuery('div.displayLarge');
        var modulelist = jQuery('.sidemenu.right .modulelist');
        var shipapperance = jQuery('.sidemenu.right .shipapperance');

        Template.shipDesignEditor.controller =
            new model.shipDesignEditor(
                shipDesignId, leftmenu, shipview, modulelist, shipapperance, dic.get('model.ShipDesignStorage'));
    }
};

Template.shipDesignEditor.destroyed = function()
{
    if ( Template.shipDesignEditor.controller)
    {
        Template.shipDesignEditor.controller.destroy();
        Template.shipDesignEditor.controller = null;
	}

    console.log("shipDesignEditor destroyed");
};

