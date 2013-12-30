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

    var timeline = TimelineCollection.findOne(find);
    
    console.log('timeline id: '+ id, timeline);
    
    if ( ! timeline)
		return [];
    
    var entries = timeline.entries.map(function(entry){
		console.log(entry);
		return new model.TimelineEntry().deserialize(entry);
	});
	
	entries.sort(function(a, b){return a.time - b.time});
	
	/*
	var orders = TimelineCollectionGameOrders.findOne(find);
    entries = entries.concat = orders.entries.map(function(entry){
		return new model.TimelineEntry().deserialize(entry.entry);
	});
	*/ 

    return entries;
};

model.TimelineStorage.prototype.persist = function(entries, id)
{
    if (Meteor.isClient)
    {
        return;
    }
    
    var timeline = TimelineCollection.findOne({_id: id});

	entries.forEach(function(entry)
	{
		if (entry.needsSaving())
		{
			entry.setSaved();;
			
			if ( ! timeline)
			{
				TimelineCollection.insert({_id: id, entries: [entry.serialize()]});
			}
			else
			{
				var exsists = TimelineCollection.findOne(
					{$and: [{_id: id}, {'entries._id': entry._id}]}
				);
				
				if (exsists)
				{
					TimelineCollection.update(
						{$and: [{_id: id}, {'entries._id': entry._id}]},
						{$set:{ 'entries.$': entry.serialize()}}
					);
				}
				else
				{
					TimelineCollection.update(
						{_id: id},
						{$push:{ entries: entry.serialize() }}
					);
				}
			}
		}
		
		if (entry.needsRemoving())
		{
			entry.setDeleted();
			
			if ( ! timeline)
				return;
				
			TimelineCollection.update(
				{_id: id},
				{$pull:{ entries: {_id: entry._id}}}
			);
		}
	}); 
};

model.TimelineStorage.prototype.persistOrders = function(entries, id, gameId, turn)
{
	entries = entries.filter(function(entry)
	{
		return entry.needsSaving();
	}).map(function(entry){
		return entry.deserialize();
	});
	
    Meteor.call(
        'PersistTimelineOrders',
        entries,
        id,
        gameId,
        turn,
        function(err, result){}
    );
};
