if ( typeof model === 'undefined')
    model = {};

TimelineFutures = new Meteor.Collection("TimelineFutures");

TimelineFutures.allow({
    insert: function () {
        return true;
    },

    update: function () {
        return true;
    },

    remove: function () {
        return true;
    }
});

TimelinePasts = new Meteor.Collection("TimelinePasts");

TimelinePasts.allow({
    insert: function () {
        return false;
    },

    update: function () {
        return false;
    },

    remove: function () {
        return false;
    }
});

Meteor.methods({
    PersistTimelineFuture: function (future, id) {
        if (Meteor.isClient)
        {
            return;
        }

        TimelineFutures.update({_id: id}, {$set:{ timeline: future}}, {upsert:true});
    }
});

model.TimelineStorage = function TimelineStorage()
{
};

model.TimelineStorage.prototype.load = function(id)
{
    var find = {_id: id};

    var past = TimelinePasts.findOne(find);
    var future = TimelineFutures.findOne(find);

    past = (past && past.timeline) ? past.timeline : [];
    future = (future && future.timeline) ? future.timeline : [];

    return {past: past, future: future};
};

model.TimelineStorage.prototype.persistPast = function(past, id)
{
    if (Meteor.isClient)
    {
        return;
    }

    TimelinePasts.update({_id: id}, {$set:{ timeline: past}}, {upsert:true});
};

model.TimelineStorage.prototype.persistFuture = function(future, id)
{
    Meteor.call(
        'PersistTimelineFuture',
        future,
        id,
        function(err, result){}
    );
};