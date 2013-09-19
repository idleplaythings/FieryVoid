if (Meteor.isClient) {

    Meteor.subscribe("directory");
    shipDesigns = Meteor.subscribe("shipDesigns");

    jQuery(window).resize(function()
    {
        //jQuery('.mainContainer, .sidemenu').height(window.innerHeight - 30);
    });
}
