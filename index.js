if (Meteor.isClient) {

    Meteor.subscribe("directory");

    Meteor.startup(function () {
        Deps.autorun(function () {

        });
    });

    Template.page.hullEditorActive = function () {
        return Session.get("selected_view") == 'hullEditor';
    };

    Template.page.moduleEditorActive = function () {
        return Session.get("selected_view") == 'moduleEditor';
    };

    Template.page.shipEditorActive = function () {
        return Session.get("selected_ship") && Session.get("selected_view") == 'shipEditor';
    };

    Template.page.createShipActive = function()
    {
        return Meteor.userId() && Session.get("selected_view") == 'createShip';
    };

    Template.page.nothingActive = function()
    {
        return ! Session.get("selected_view");
    };

    Template.menu.events({
        'click .button': function (event) {
            var element = jQuery(event.currentTarget);
            Session.set("selected_view", element.data('viewtarget'));
        }
    });

    jQuery(window).resize(function()
    {
        jQuery('.mainContainer, .sidemenu').height(window.innerHeight - 30);
    });
}