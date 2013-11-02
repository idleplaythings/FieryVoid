Template.shipListEntry.name = function()
{
    return this.name;
};

Template.shipListEntry.username = function()
{
    if (this.owner == Meteor.userId())
        return '';

    return displayName(Meteor.users.findOne({_id: this.owner}));
};
