TimelineFutures = new Meteor.Collection("TimelineFutures");

TimelineFutures.allow({
    insert: function () {
        return true;
    },

    update: function () {
        return true;
    },

    remove: function () {
        return false;
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

model.TimeLinePersistency = function TimeLinePersistency()
{
};

model.TimeLinePersistency.prototype.load = function(id)
{
    var timeline = [];

    var past = TimelinePasts.findOne({_id: timeline._id});
    var future = TimelineFutures.findOne({_id: timeline._id});

    if (past)
        timeline._timeline = past;

    if (future)
    {
        for (var i in future)
        {
            if (timeline[i])
            {
                timeline[i].push(future[i]);
            }
            else
            {
                timeline[i] = [future[i]];
            }
        }
    }

    return timeline;
};

model.TimeLinePersistency.prototype.persistPast = function(past, id)
{
    if (Meteor.isClient())
    {
        throw new Error("Client is not allowed to persist timeline past");
    }

    if (id)
    {
        TimelinePasts.update({_id: id}, {$pushAll:{ timeline: past}});
    }
    else
    {
        return TimelinePasts.insert({ timeline: past});
    }
};

model.TimeLinePersistency.prototype.persistFuture = function(future, id)
{
    if (id)
    {
        TimelineFutures.update({_id: timeline._id}, {$set:{ timeline: future}});
    }
    else
    {
        return TimelineFutures.insert({ timeline: future});
    }
};