if (Meteor.isClient) {

    Meteor.subscribe("directory");

    Meteor.startup(function () {
        Deps.autorun(function () {

        });
    });

    Template.menu.events({
        'click .button': function (event) {
            var element = jQuery(event.currentTarget);
            Session.set("selected_view", element.data('viewtarget'));
        }
    });

    jQuery(window).resize(function()
    {
        //jQuery('.mainContainer, .sidemenu').height(window.innerHeight - 30);
    });
}