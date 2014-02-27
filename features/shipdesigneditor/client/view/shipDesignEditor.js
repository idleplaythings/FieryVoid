Template.shipDesignEditor.created = function()
{
    console.log("shipDesignEditor created");
}

Template.shipDesignEditor.rendered = function()
{
    if ( ! Template.shipDesignEditor.controller)
    {
        var editor = dic.get('model.ShipDesignEditor');

        editor.init(
            Session.get("selected_shipDesign"),
            jQuery('.sidemenu.left'),
            jQuery('div.displayLarge'),
            jQuery('.sidemenu.right .modulelist'),
            jQuery('.sidemenu.right .shipapperance')
        );

        Template.shipDesignEditor.controller = editor;

        //new model.shipDesignEditor(
        //    shipDesignId, leftmenu, shipview, modulelist, shipapperance, dic.get('model.ShipDesignStorage'));
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

