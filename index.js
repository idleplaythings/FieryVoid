if (Meteor.isClient) {

    Meteor.subscribe("directory");

    Meteor.startup(function () {
        Deps.autorun(function () {

        });
    });

    jQuery(window).resize(function()
    {
        //jQuery('.mainContainer, .sidemenu').height(window.innerHeight - 30);
    });
}