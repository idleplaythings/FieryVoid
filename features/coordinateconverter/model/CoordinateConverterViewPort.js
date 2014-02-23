model.CoordinateConverterViewPort = function CoordinateConverterViewPort(dispatcher)
{
    dispatcher.attach("ScrollEvent", this.onScroll.bind(this));
    dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
    dispatcher.attach("WindowResizeEvent", this.onResize.bind(this));

    this._position = {x:0, y:0};
    this._zoom = 1.0;
    this._width = 0;
    this._height = 0;
};

model.CoordinateConverterViewPort.prototype.onScroll = function(event)
{
    this._position = event.position;
};

model.CoordinateConverterViewPort.prototype.onZoom = function(event)
{
    this._zoom = event.zoom;
};

model.CoordinateConverterViewPort.prototype.onResize = function(event)
{
    this._width = event.width;
    this._height = event.height;
};

model.CoordinateConverterViewPort.prototype.fromViewPortToGame = function(pos)
{
    var cameraPos = {x: this._position.x, y:this._position.y};
    var zoom = this._zoom;
    var windowDimensions = {width:this._width, height: this._height};
    var positionFromCenterOfScreen = {x: pos.x - windowDimensions.width/2, y: windowDimensions.height/2 - pos.y };
    var withZoom = {x: positionFromCenterOfScreen.x / zoom, y: positionFromCenterOfScreen.y / zoom};

    var positionFromCamera = {x:withZoom.x + cameraPos.x, y:withZoom.y + cameraPos.y}
    return positionFromCamera;
};

model.CoordinateConverterViewPort.prototype.fromGameToViewPort = function(pos)
{
    var cameraPos = {x: this._position.x, y:this._position.y};
    var zoom = this._zoom;
    var windowDimensions = {width:this._width, height: this._height};


    var positionFromCamera = {x: pos.x - cameraPos.x, y:pos.y - cameraPos.y};
    var withZoom = {x: positionFromCamera.x * zoom, y: positionFromCamera.y * zoom};
    var positionFromCenterOfScreen = {x: withZoom.x + windowDimensions.width/2, y: windowDimensions.height/2 - withZoom.y};

    return positionFromCenterOfScreen;
};
