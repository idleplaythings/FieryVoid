model.TimelineFactory = function TimelineFactory(gamestate, gameid, storage)
{
    this._gameState = gamestate;
    this._gameid = gameid;
    this._storage = storage;
    this._loadedTimelines = [];
};

model.TimelineFactory.prototype.getTimeline = function(id)
{
    var contents = (id) ? this._storage.load(id) : [];

    if (! id)
        id = new Meteor.Collection.ObjectID().toHexString();

    var timeline = new model.Timeline(
       id,
       this._gameid,
       this._gameState,
       this._storage,
       contents.past,
       contents.future,
       new model.EventDispatcher()
    );

    this._loadedTimelines.push(timeline);
    return timeline;
};

model.TimelineFactory.prototype.reloadTimelines = function()
{
    this._loadedTimelines.forEach(function(timeline){
        var contents = this._storage.load(timeline._id);
        timeline.reload(contents.past, contents.future);
    }, this);
};

model.TimelineFactory.prototype.persistAll = function()
{
    console.log("Persist all timelines");
    this._loadedTimelines.forEach(function(timeline){
        timeline.persist();
    }, this);
};