Template.hullEditor.created = function()
{
    this.data.hullEditor = dic.get('model.HullEditor');
}

Template.hullEditor.rendered = function()
{
    this.data.hullEditor.init(jQuery('div.displayLarge'));
};

Template.hullEditor.destroyed = function()
{
    this.data.hullEditor.destroy();
};

Template.hullEditor.choosingHull = function()
{
    return Session.get('hulleditor_selecting_hull');
};

Template.hullEditor.events({
    'click .create': function () {
        console.log("create");
        Session.set('hulleditor_selecting_hull', true);
    },
    'click .hullimagelist .hullImage.selectable' : function(){
        Meteor.call('HullLayoutInsert', this.img, function(err, result){
           Session.set('hulleditor_selected_hullLayout', result);
           Session.set('hulleditor_selecting_hull', false);
        });
    },
    'click .sidemenu .hullImage.selectable' : function(){
        Session.set('hulleditor_selected_hullLayout', this._id);
    },

    'click .hideHullImageList' : function(){
        Session.set('hulleditor_selecting_hull', false);
    }
});

Template.hullmenu.heightClass1 = function()
{
    return  ! Session.get('hullEditor_tileHeight') ? 'active' : '';
};

Template.hullmenu.heightClass2 = function()
{
    return Session.get('hullEditor_tileHeight') == '2' ? 'active' : '';
};

Template.hullmenu.events({
    'blur input': function (event, template) {
        handleDetailChange(event.currentTarget, template.data.hullLayout);
    },
    'click .publish': function(event, template) {
        var layout = template.data.hullLayout;
        if (layout)
        {
            dic.get('model.HullEditorService').togglePublish(layout);
        }
    },
    'click .tileheight': function(event) {
        var currentElement = event.target;
        var height = jQuery(currentElement).data('tileheight');

        if (height === 1)
            height = null;

        Session.set('hullEditor_tileHeight', height);
    }
});

function handleDetailChange(element, layout)
{
    var name = jQuery(element).attr('name');
    var value = jQuery(element).val();

    if ( ! layout)
        return;

    dic.get('model.HullEditorService').update(layout, name, value);
};
