model.InputMode = function InputMode(dispatcher, actions, priority)
{
	this._dispatcher = dispatcher;
	this._actions = actions;
	this._priority = priority || 0;

	this._uiResolver = null;
};

model.InputMode.prototype.activate = function(uiResolver)
{
	this._scrollCallBack = this._dispatcher.attach("ScrollEvent", this.onScroll.bind(this), this._priority);
    this._zoomCallBack = this._dispatcher.attach("ZoomEvent", this.onZoom.bind(this), this._priority);
	//this.mouseClickCallback = uiResolver.registerListener('click', this.onClick.bind(this), 1);
    //this.mouseMoveCallback = uiResolver.registerListener('mousemove', this.onMouseMove.bind(this), 1);
	//jQuery("#gameContainer").addClass('selectCursor');
};

model.InputMode.prototype.deactivate = function(uiResolver)
{
	this._dispatcher.detach("ScrollEvent", this._scrollCallBack);
	this._dispatcher.detach("ZoomEvent", this._zoomCallBack);
	//uiResolver.unregisterListener('click', this.mouseClickCallback);
    //uiResolver.unregisterListener('mousemove', this.mouseMoveCallback);
	//jQuery("#gameContainer").removeClass('selectCursor');
};

model.InputMode.prototype.onScroll = function(event)
{
	this._delegate('onScroll', event);
};

model.InputMode.prototype.onZoom = function(event)
{
	this._delegate('onZoom', event);
};

model.InputMode.prototype._delegate = function(handlerName, event)
{
	this._actions.forEach(function(action){
		if (action[handlerName])
			action[handlerName](event);
	}, this);
};




model.InputMode.prototype.remove = function()
{
	if (this.uiEventResolver)
		this.uiEventResolver.removeInputMode(this);
};