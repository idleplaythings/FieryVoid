model.TimelineFactory = function TimelineFactory(gamestate, gameid, storage)
{
    this._gameState = gamestate;
    this._gameid = gameid;
    this._storage = storage;
};

model.TimelineFactory.prototype.getTimeline = function(id)
{
    var timeline = (id) ? this._storage.load(id) : [];

    if (! id)
        id = new Meteor.Collection.ObjectID().toHexString();

    return new model.Timeline(
       id, this._gameid, this._gameState, this._storage, timeline.past, timeline.future);
};