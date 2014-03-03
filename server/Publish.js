Meteor.publish(null, function () {
  return Meteor.users.find(
      this.userId,
      {fields: {isAdmin: 1,emails: 1, profile: 1}});
});

Meteor.publish(null, function () {
    return Meteor.users.find(
        {},
        {fields: {emails: 1, profile: 1}});
});