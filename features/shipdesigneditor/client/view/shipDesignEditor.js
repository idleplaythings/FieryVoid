Template.shipDesignEditor.created = function()
{
    Template.shipDesignEditor.controller = dic.get('model.ShipDesignEditor');
};

Template.shipDesignEditor.rendered = function(){
    Template.shipDesignEditor.controller.init(
        this.data.shipDesignId,
        jQuery('.sidemenu.left'),
        jQuery('div.displayLarge'),
        jQuery('.sidemenu.right .modulelist'),
        jQuery('.sidemenu.right .shipapperance')
    );
};

Template.shipDesignEditor.destroyed = function()
{
    Template.shipDesignEditor.controller.destroy();
    Template.shipDesignEditor.controller = null;

};

