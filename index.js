if (Meteor.isClient) {

    Meteor.subscribe("directory");

    jQuery(window).resize(function()
    {
        //jQuery('.mainContainer, .sidemenu').height(window.innerHeight - 30);
    });
}
