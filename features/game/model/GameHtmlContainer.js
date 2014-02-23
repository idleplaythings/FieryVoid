model.GameHtmlContainer = function GameHtmlContainer(dispatcher)
{
	this._dispatcher = dispatcher;
	this._container = null;
};

model.GameHtmlContainer.prototype.set = function(container)
{
	this._container = container;
	jQuery(window).resize(this._resize.bind(this));
	this._resize();

	this._dispatcher.dispatch({
        name: "GameContainerInitEvent",
        container: this.get()
    });
};

model.GameHtmlContainer.prototype.get = function()
{
	if ( ! this._container)
		throw new Error("Gamecontainer is not set");

	return this._container;
};

model.GameHtmlContainer.prototype._resize = function()
{
	this._dispatcher.dispatch({
        name: "WindowResizeEvent",
        width: this.width(),
    	height:this.height()
    });
};

model.GameHtmlContainer.prototype.width = function()
{
	return this._container.innerWidth();
};

model.GameHtmlContainer.prototype.height = function()
{
	return this._container.innerHeight();
};


model.GameHtmlContainer.prototype.addStats = function()
{
    var stats = new Stats();
	stats.setMode(0); // 0: fps, 1: ms

	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';

	this.get().append(stats.domElement);
	return stats;
};