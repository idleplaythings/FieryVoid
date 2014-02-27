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
	this._mouseClickCallback = this._dispatcher.attach('ClickEvent', this.onClick.bind(this), 1);
    this._mouseMoveCallback = this._dispatcher.attach('MouseMoveEvent', this.onMouseMove.bind(this), 1);
	this._delegate('onActivation');
};

model.InputMode.prototype.deactivate = function(uiResolver)
{
	this._dispatcher.detach("ScrollEvent", this._scrollCallBack);
	this._dispatcher.detach("ZoomEvent", this._zoomCallBack);
	this._dispatcher.detach('ClickEvent', this._mouseClickCallback);
    this._dispatcher.detach('MouseMoveEvent', this._mouseMoveCallback);
	this._delegate('onDeactivation');
};

model.InputMode.prototype.onClick = function(event)
{
	this._delegate('onClick', event);
};

model.InputMode.prototype.onMouseMove = function(event)
{
	this._delegate('onMouseMove', event);
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
	if ( ! event)
		event = {};
	
	this._actions.forEach(function(action){

		if (event.stopped)
			return;

		if (action[handlerName])
			action[handlerName](event);

	}, this);
};


model.InputMode.prototype.remove = function()
{
	if (this.uiEventResolver)
		this.uiEventResolver.removeInputMode(this);
};