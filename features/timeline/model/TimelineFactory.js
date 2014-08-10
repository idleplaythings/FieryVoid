if ( typeof model === 'undefined')
    model = {};

model.TimelineFactory = function TimelineFactory(storage)
{
    this._storage = storage;
    this._loadedTimelines = [];
    this._gameSaveInterval = null;
};

model.TimelineFactory.prototype.getTimeline = function(id)
{
	if ( ! id)
		id = new Meteor.Collection.ObjectID().toHexString();

    var timeline = new model.Timeline(
       id,
       this._storage,
       new model.EventDispatcher()
    );

    this._loadedTimelines.push(timeline);
    return timeline;
};

model.TimelineFactory.prototype.reloadTimelines = function()
{
    this._loadedTimelines.forEach(function(timeline){
        timeline.reload();
    }, this);
};

model.TimelineFactory.prototype.persistAll = function()
{
    this._loadedTimelines.forEach(function(timeline){
        timeline.persist();
    }, this);
};

model.TimelineFactory.prototype.cleanUp = function()
{
    this._loadedTimelines = [];
};

model.TimelineFactory.prototype.getAllSerializedTimelineEntriesForSave = function(gameid)
{
    var entries = [];
    this._loadedTimelines.forEach(function(timeline){

        var entry = timeline.serializeForRemoteSaving();
        if (entry)
            entries.push(entry);

    }, this);

    return entries;
};

model.TimelineFactory.prototype.startGameSaveInterval = function(gameid)
{

    var self = this;
    setTimeout(function(){

        var entries = self.getAllSerializedTimelineEntriesForSave();
        if (entries.length == 0)
        {
            self.startGameSaveInterval(gameid);
            return;
        }

        console.log("persisting timelines from interval");
        Meteor.call(
        'SaveGameTimelines',
        gameid, entries,
        function(err, result){
            console.log(result);
            self.processSavedEntries(entries, result);
            self.startGameSaveInterval(gameid);
        }
    );
    },1000);
};

model.TimelineFactory.prototype.processSavedEntries = function(orginalEntries, savedEntries)
{
    var orginalEntries = orginalEntries.reduce(function(list, current){
        return list.concat(current.entries);
    }, []);

    var savedEntries = savedEntries.reduce(function(list, current){
        return list.concat(current.entries.map(function(entry){
            return new model.TimelineEntry(entry);
        }));
    }, []);

    orginalEntries.forEach(function(orginalEntry){
        var savedEntry = savedEntries.filter(function(entry){ return entry._id == orginalEntry._id;})[0];

        if ( ! savedEntry)
            return;

        if (orginalEntry.needsSaving() &&  ! savedEntry.needsSaving())
            orginalEntry.setSaved();

        if (orginalEntry.needsRemoving() &&  ! savedEntry.needsRemoving())
            orginalEntry.setRemoved();
    });

     this._loadedTimelines.forEach(function(timeline){
        timeline.deleteRemoved();
    }, this);
}


