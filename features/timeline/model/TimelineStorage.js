if ( typeof model === 'undefined')
    model = {};

/*
TimelineCollectionGameOrders = new Meteor.Collection("TimelineCollectionGameOrders");

TimelineCollectionGameOrders.allow({
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
*/

TimelineCollection = new Meteor.Collection("TimelineCollection");

TimelineCollection.allow({
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
    PersistTimelineOrders: function (future, id) {
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
  var entries = [];
  var timelineEntry = TimelineCollection.find({timelineId: id})
    .fetch()
    .forEach(function(timelineEntry){
      entries.push(new model.TimelineEntry().deserialize(timelineEntry.entry));
    });

	entries.sort(function(a, b){return a.time - b.time});

  return entries;
};

model.TimelineStorage.prototype.persist = function(entries)
{
  entries = [].concat(entries);
  
  if (Meteor.isClient)
  {
    return;
  }

	entries.forEach(function(entry)
	{
		if (entry.needsSaving())
		{
			entry.setSaved();

      var savedEntry = TimelineCollection.findOne({_id: entry._id});

      if (savedEntry){
        TimelineCollection.update({_id: entry._id}, {$set: {entry: entry.serialize()}})
      }else{
        TimelineCollection.insert({
          _id: entry._id,
          timelineId: entry.timelineId,
          entry: entry.serialize()
        });
      }
		}

		if (entry.needsRemoving())
		{
			entry.setRemoved();

			if ( ! timeline)
				return;

			TimelineCollection.remove({_id: entry._id});
		}
	});
};