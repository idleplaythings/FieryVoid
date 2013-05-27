Template.smallModuleImage.moduleImgSrc = function()
{
    return '/module/' +this.moduleImgName+ '-inside.png';
};

Template.smallModuleImage.selectedClass = function()
{
    return Session.get('selected_module') == this._id ? 'selected' : '';
};

Template.smallModuleImage.events({
    'click .module': function () {
        console.log("selecting " + this._id );
        Session.set('selected_module', this._id);
    }
});

Template.smallModuleImage.rendered = function(){
    var grid = this.find('.module');
    var moduleLayout = ModuleLayouts.findOne({'_id': this.data._id});

    if ( ! moduleLayout)
        return;

    var display = new model.ShipDisplayGrid(
        jQuery(grid),
        'moduleGrid',
        {color: 'rgba(0,40,255,0.3)', width:1}
    );
    display.start({hullLayout: moduleLayout});
};