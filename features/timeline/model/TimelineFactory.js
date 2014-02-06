if ( typeof model === 'undefined')
    model = {};

model.TimelineFactory = function TimelineFactory(storage)
{
    this._storage = storage;
    this._loadedTimelines = [];
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
