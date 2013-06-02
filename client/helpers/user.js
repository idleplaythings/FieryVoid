isAdminUser = function() {
    if (typeof Meteor.user() === 'undefined') {
        return false;
    }

    if (typeof Meteor.user().isAdmin === 'undefined') {
        return false;
    }

    if (Meteor.user().isAdmin == false) {
        return false;
    }

    return true;
}
