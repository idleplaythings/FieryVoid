model.TimelineRemoteSaver = function TimelineRemoteSaver(timeline, entries, timelineStorage)
{
	this._timeline = timeline;
	this._entries = entries;
	this._timelineStorage = timelineStorage;
};

model.TimelineRemoteSaver.prototype.persist = function()
{
	this._timelineStorage.persist(this._entries, this._timeline._id);
};