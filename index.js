if (Meteor.isClient) {

    Meteor.subscribe("directory");
    Meteor.subscribe("shipDesigns");

    jQuery(window).resize(function()
    {
        //jQuery('.mainContainer, .sidemenu').height(window.innerHeight - 30);
    });
}
