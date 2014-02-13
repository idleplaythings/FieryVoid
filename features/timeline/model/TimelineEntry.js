if ( typeof model === 'undefined')
    model = {};

model.TimelineEntry = function TimelineEntry(args)
{
    if (! args)
        args = {};

	this._id = args._id || new Meteor.Collection.ObjectID().toHexString();
    this.name = args.name || "";
    this.payload = args.payload || null;
    this.time = args.time || new Date().getTime();
    this.context = args.context || null;
    
    this._saved = args._saved ||false;
    this._locked = args._locked || false;
    
    this._remove = args._remove || false;
    this._removed = args._removed || false;
};

model.TimelineEntry.prototype.canUpdate = function(payload)
{
    return this._locked === false;
};

model.TimelineEntry.prototype.update = function(payload)
{
	if ( ! this.canUpdate())
		throw Error("Can't update locked timeline entry");
		return;
		
    this.payload = payload;
    this._saved = false;
};

model.TimelineEntry.prototype.needsSaving = function()
{
    return this._saved === false;
};

model.TimelineEntry.prototype.setSaved = function()
{
    this._saved = true;
    return this;
};

model.TimelineEntry.prototype.remove = function()
{
    this._remove = true;
    return this;
};

model.TimelineEntry.prototype.needsRemoving = function()
{
    return this._remove;
};

model.TimelineEntry.prototype.setRemoved = function()
{
    this._removed = true;
    return this;
};

model.TimelineEntry.prototype.isRemoved = function()
{
    return this._removed;
};

model.TimelineEntry.prototype.lock = function(payload)
{
	if (Meteor.isClient)
		throw Error("Can't lock timeline entries on clientside");
		
    return this._locked === true;
    this._saved = false;
};

model.TimelineEntry.prototype.serialize = function()
{
    return {
		_id: this._id,
		name: this.name,
		time: this.time,
		context: this.context,
		locked: this._locked,
		payload: this.payload
	};
};

model.TimelineEntry.prototype.deserialize = function(args)
{
	this._id = args._id
	this.name = args.name;
    this.payload = args.payload;
    this.time = args.time;
    this.context = args.context;
    this._locked = args.locked;
    this._saved = true;
    return this;
};

