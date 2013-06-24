if (Meteor.isClient) {

    Meteor.subscribe("directory");
    Meteor.subscribe("ShipDesigns");
    Meteor.subscribe("HullImages");
    Meteor.subscribe("HullLayouts");
    Meteor.subscribe("ModuleImages");
    Meteor.subscribe("ModuleLayouts");

    jQuery(window).resize(function()
    {
        //jQuery('.mainContainer, .sidemenu').height(window.innerHeight - 30);
    });
}
