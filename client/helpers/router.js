Meteor.Router.add({
    '/': {
        to: 'menu',
        as: 'shipMenu'
    },
    '/editor/hull': {
        to: 'hullEditor',
        and: function() {
            Session.set('selected_view', 'hullEditor');
        }
    },
    '/editor/module': {
        to: 'moduleEditor',
        and: function() {
            Session.set('selected_view', 'moduleEditor');
        }
    },
    '/ship/:_id/edit': {
        to: 'shipEditor',
        and: function(id) {
            Session.set('selected_view', 'shipEditor');
            Session.set("selected_ship", id);
        }
    },
    '/ship/create': {
        to: 'createShip',
        and: function() {
            Session.set('selected_view', 'createShip');
        }
    }
});

Meteor.Router.filters({
    'adminOnly': function(page) {
        if (isAdminUser()) {
            return page;
        }

        return 'forbidden';
    }
});

Meteor.Router.filter('adminOnly', {
    only: [
        'moduleEditor',
        'hullEditor'
    ]
});
