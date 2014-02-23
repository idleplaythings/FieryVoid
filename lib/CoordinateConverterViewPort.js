model.CoordinateConverterViewPort = function CoordinateConverterViewPort(scene)
{
    this.scene = scene;
};

model.CoordinateConverterViewPort.prototype.fromViewPortToGame = function(pos)
{
    var cameraPos = {x: this.scene.camera.position.x, y:this.scene.camera.position.y};
    var zoom = this.scene.zoom;
    var windowDimensions = {width:this.scene.width, height: this.scene.height};
    var positionFromCenterOfScreen = {x: pos.x - windowDimensions.width/2, y: windowDimensions.height/2 - pos.y };
    var withZoom = {x: positionFromCenterOfScreen.x / zoom, y: positionFromCenterOfScreen.y / zoom};

    var positionFromCamera = {x:withZoom.x + cameraPos.x, y:withZoom.y + cameraPos.y}
    return positionFromCamera;
};

model.CoordinateConverterViewPort.prototype.fromGameToViewPort = function(pos)
{
    var cameraPos = {x: this.scene.camera.position.x, y:this.scene.camera.position.y};
    var zoom = this.scene.zoom;
    var windowDimensions = {width:this.scene.width, height: this.scene.height};


    var positionFromCamera = {x: pos.x - cameraPos.x, y:pos.y - cameraPos.y};
    var withZoom = {x: positionFromCamera.x * zoom, y: positionFromCamera.y * zoom};
    var positionFromCenterOfScreen = {x: withZoom.x + windowDimensions.width/2, y: windowDimensions.height/2 - withZoom.y};

    return positionFromCenterOfScreen;
};
