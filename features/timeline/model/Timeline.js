if ( typeof model === 'undefined')
    model = {};

model.Timeline = function Timeline(id, storage, dispatcher)
{
    this._id = id;

    this._entries = [];
    this._storage = storage;

    this.dispatcher = dispatcher;
    this.loaded = false;
};

model.Timeline.prototype.ensureLoaded = function()
{
    if ( ! this.loaded)
    {
		this._entries = this._storage.load(this._id);
        this.loaded = true;
    }
};

model.Timeline.prototype.getId = function()
{
    return this._id;
};

model.Timeline.prototype.reload = function()
{

	this.persist();
	this.loaded = false;
	this.ensureLoaded();

    this.dispatcher.dispatch({name:'timelineReload'});
};

model.Timeline.prototype.observeReload = function(callback)
{
    this.dispatcher.attach('timelineReload', callback);
};

model.Timeline.prototype.serializeForRemoteSaving = function()
{
    var entries = this.getEntriesNeedingSaveOrRemove();
    
    if (entries.length == 0)
        return null;

    return {
        id: this._id,
        entries: entries
    }
}

model.Timeline.prototype.getEntriesNeedingSaveOrRemove = function()
{
    return this._entries.filter(function(entry){
        return entry.needsSaving() || entry.needsRemoving();
    });
}

model.Timeline.prototype.persist = function()
{
	var entries = this.getEntriesNeedingSaveOrRemove();
	
	if (entries.length == 0)
		return;
		
    this._storage.persist(entries);
    
    this.deleteRemoved();
   
    return this;
};

model.Timeline.prototype.deleteRemoved = function()
{
    this._entries = this._entries.filter(function(entry){
        return ! entry.isRemoved(); 
    });
};

model.Timeline.prototype.add = function(name, payload)
{
    var entry = new model.TimelineEntry({
        name: name,
        payload: payload,
        timelineId: this._id
    });

    this._entries.push(entry);
};

model.Timeline.prototype.get = function()
{
    this.ensureLoaded();
    return this._entries.filter(function(entry){
		return entry.isActive();
	});
};

model.Timeline.prototype.map = function(callback, context)
{
    return this.get().map(callback, context);
};

model.Timeline.prototype.filter = function(callback, context)
{
    return this.get().filter(callback, context);
};
