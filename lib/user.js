isAdminUser = function() {
    if (! Meteor.user()) {
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

displayName = function (user) {

    if (! user)
        return '';

    if (user.profile && user.profile.name)
        return user.profile.name;
    var email = user.emails[0].address;
    return email.split('@')[0];
};
