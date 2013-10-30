if ( typeof model === 'undefined')
    model = {};

model.TimelineFactory = function TimelineFactory(storage)
{
    this._storage = storage;
    this._loadedTimelines = [];
};

model.TimelineFactory.prototype.getTimeline = function(id)
{
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
    console.log("Persist all timelines");
    this._loadedTimelines.forEach(function(timeline){
        timeline.persist();
    }, this);
};

model.TimelineFactory.prototype.cleanUp = function()
{
    this._loadedTimelines = [];
};