model.InputMode = function InputMode(dispatcher, actions, priority)
{
	this._dispatcher = dispatcher;
  this._inputState = null;
	this._actions = actions;
	this._priority = priority || 0;

	this._uiResolver = null;
};

model.InputMode.prototype.activate = function(uiResolver)
{
  this._inputState = new model.InputState();

	this._scrollCallBack = this._dispatcher.attach("ScrollEvent", this.onScroll.bind(this), this._priority);
  this._zoomCallBack = this._dispatcher.attach("ZoomEvent", this.onZoom.bind(this), this._priority);
	this._mouseClickCallback = this._dispatcher.attach('ClickEvent', this.onClick.bind(this), 1);
  this._mouseMoveCallback = this._dispatcher.attach('MouseMoveEvent', this.onMouseMove.bind(this), 1);
  this._mouseOverCallback = this._dispatcher.attach('MouseOverEvent', this.onMouseOver.bind(this), 1);
  this._mouseOutCallback = this._dispatcher.attach('MouseOutEvent', this.onMouseOut.bind(this), 1);
  this._keyUpCallback = this._dispatcher.attach('KeyUpEvent', this.onKeyUp.bind(this), 1);
	this._delegate('onActivation');
};

model.InputMode.prototype.deactivate = function(uiResolver)
{
  this._inputState = null;

	this._dispatcher.detach("ScrollEvent", this._scrollCallBack);
	this._dispatcher.detach("ZoomEvent", this._zoomCallBack);
	this._dispatcher.detach('ClickEvent', this._mouseClickCallback);
  this._dispatcher.detach('MouseMoveEvent', this._mouseMoveCallback);
  this._dispatcher.detach('MouseOverEvent', this._mouseOverCallback);
  this._dispatcher.detach('MouseOutEvent', this._mouseOutCallback);
  this._dispatcher.detach('KeyUpEvent', this._keyUpCallback);
	this._delegate('onDeactivation');
};

model.InputMode.prototype.onKeyUp = function(event)
{
	this._delegate('onKeyUp', event);
};

model.InputMode.prototype.onClick = function(event)
{
	this._delegate('onClick', event);
};

model.InputMode.prototype.onMouseMove = function(event)
{
	this._delegate('onMouseMove', event);
};

model.InputMode.prototype.onMouseOut = function(event)
{
	this._delegate('onMouseOut', event);
};

model.InputMode.prototype.onMouseOver = function(event)
{
	this._delegate('onMouseOver', event);
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
	
	this._actions.every(function(action){
		
		if (event.stopped)
			return false;

		if (action[handlerName])
			action[handlerName](event, this, this._inputState);

		return true;
	}, this);
};


model.InputMode.prototype.remove = function()
{
	if (this.uiEventResolver)
		this.uiEventResolver.removeInputMode(this);
};