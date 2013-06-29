model.GameScene = function GameScene(dispatcher){

    this.width = 1000;
    this.height = 800;
    this.camera = null;
    this.scene = new THREE.Scene();
    this.renderer = null,
    this.ambientLightColor = 0xffffff,
    this.light = null;
    this.zoom = 1;
    this.ambientLight = null;

    this.dispatcher = dispatcher;

    this.dispatcher.attach(new model.EventListener(
        "ScrollEvent",
        jQuery.proxy(this.onScroll, this)));

    this.dispatcher.attach(new model.EventListener(
        "ZoomEvent",
        jQuery.proxy(this.onZoom, this)));

    jQuery(window).resize(jQuery.proxy(this.resize, this));
};

model.GameScene.prototype.constructor = model.GameScene;

model.GameScene.prototype.init = function(target)
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    this.width = width;
    this.height = height;
    var zoom = 1;

    var camera = new THREE.OrthographicCamera(
        width / (-80*zoom), width / (80*zoom), height / (80*zoom), height / (-80*zoom), 0.01, 1000 );

    camera.position.z = 200;

    this.camera = camera;
    this.scene.add( camera );

    this.ambientLight = new THREE.AmbientLight(this.ambientLightColor);
    this.scene.add(this.ambientLight);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( width, height );
    this.renderer.autoClear = false;

    $(this.renderer.domElement)
        .on('contextmenu', function(e){e.stopPropagation(); return false; })
        .addClass("webglCanvas").appendTo(target);
};

model.GameScene.prototype.getScene = function()
{
    return this.scene;
};

model.GameScene.prototype.animate = function()
{
    requestAnimationFrame( jQuery.proxy(this.animate, this) );
    //AnimationHandler.tick();
    this.render();

};

model.GameScene.prototype.render = function()
{
    this.renderer.clear();
    this.renderer.render( this.scene, this.camera );
};

model.GameScene.prototype.resize = function()
{
    this.zoomCamera(this.zoom);
    this.renderer.setSize( window.innerWidth, window.innerHeight );
};

model.GameScene.prototype.zoomCamera = function(zoom)
{
    this.zoom = zoom;
    var width = window.innerWidth;
    var height = window.innerHeight;

    this.camera.left = width / (-80*zoom);
    this.camera.right = width / (80*zoom);
    this.camera.top = height / (80*zoom);
    this.camera.bottom = height / (-80*zoom);

    this.camera.updateProjectionMatrix();
};

model.GameScene.prototype.moveCameraToPosition = function(pos)
{
    this.camera.position.x = pos.x;
    this.camera.position.y = -pos.y;

    WaterLayer.light.position.x = this.camera.position.x;
    WaterLayer.light.position.y = this.camera.position.y;
};

model.GameScene.prototype.onScroll = function(event)
{
    if (event.position)
        this.moveCamera(event.position);
};

model.GameScene.prototype.onZoom = function(event)
{
    if (event.zoom)
        this.zoomCamera(event.zoom);
};

model.GameScene.prototype.moveCamera = function(pos)
{
    this.camera.position.x = pos.x/40;
    this.camera.position.y = pos.y/40;
};

model.GameScene.prototype.camPosInWindow = function()
{
    return {x: this.camera.position.x*40, y:this.camera.position.y*40};
};

model.GameScene.prototype.camPosIn3d = function()
{
    return {x: this.camera.position.x, y:this.camera.position.y};
};

model.GameScene.prototype.camPosInGame = function()
{
    return {x: this.camera.position.x * 2, y:this.camera.position.y * -2};
};
