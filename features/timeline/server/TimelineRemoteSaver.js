model.TimelineRemoteSaver = function TimelineRemoteSaver(timeline, entries, timelineStorage)
{
	this._timeline = timeline;
	this._entries = entries;
	this._timelineStorage = timelineStorage;
};

model.TimelineRemoteSaver.prototype.persist = function()
{
	timelineStorage.persist(this._timeline._id, this._entries);
};