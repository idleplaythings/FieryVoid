Template.smallModuleImage.selectedClass = function()
{
    var selected = Session.get('selected_module') == this._id;
    return (selected) ? 'selected' : '';
};

Template.smallModuleImage.events({
    'click .module': function () {
        Session.set('selected_module', this._id);
    }
});

Template.smallModuleImage.rendered = function(){
    var grid = this.find('.canvasContainer');
    var moduleLayout = this.data;
    var self = this;

    if ( ! moduleLayout)
        return;

    moduleLayout.position = moduleLayout.getTopLeftPosition();

    var moduleDisplay = new model.ShipDisplayModules(
        jQuery(grid),
        'moduleImgCanvas',
        'inside'
    );

    var display = new model.ShipDisplayGrid(
        jQuery(grid),
        'moduleGrid',
        {color: 'rgba(0,40,255,0.3)', width:1}
    );

    moduleDisplay.start({hullLayout: moduleLayout, modules: [moduleLayout]});
    display.start({hullLayout: moduleLayout});
};
