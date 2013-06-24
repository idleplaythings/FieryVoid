Meteor.Router.add({
    '/': {
        to: 'shipMenu'
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

            var ship = ShipDesigns.findOne({_id: id});
            Session.set("selected_ship", id);

            if (ship)
            {
                Session.set("selected_ship_owner", ship.owner);
                var owner = Meteor.users.findOne({_id: ship.owner});
                Session.set("selected_ship_owner_name", displayName(owner));
            }
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
