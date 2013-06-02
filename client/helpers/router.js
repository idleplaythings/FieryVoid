Meteor.Router.add({
    '/': {
        to: 'menu'
    },
    '/editor/hull': {
        to: 'hullEditor',
        and: function(id) {
            Session.set('selected_view', 'hullEditor');
        }
    },
    '/editor/module': {
        to: 'moduleEditor',
        and: function(id) {
            Session.set('selected_view', 'moduleEditor');
        }
    },
    '/editor/ship': {
        to: 'shipEditor',
        and: function(id) {
            Session.set('selected_view', 'shipEditor');
        }
    },
    '/create/ship': {
        to: 'createShip',
        and: function(id) {
            Session.set('selected_view', 'createShip');
        }
    }
});
