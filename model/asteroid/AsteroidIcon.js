model.ShipIcon = function ShipIcon(ship, dispatcher)
{
    this.ship = ship;
    this.shipDesign = ship.shipDesign;
    this.ThreeIconGroup = null;
    this.sprites = [];
    this.dispatcher = dispatcher;

    this.hull = null;
    this.modules = null;
    this.selected = null;

    this.dispatcher.attach(new model.EventListener(
        "ZoomEvent",
        jQuery.proxy(this.onZoom, this)));
};

model.ShipIcon.prototype.create = function()
{
    var icon = new THREE.Object3D();
    icon.position = new THREE.Vector3(0, 0, 1);
    icon.renderDepth = 10;


    this.ThreeIconGroup = new THREE.Object3D();
    this.ThreeIconGroup.position = new THREE.Vector3(0, 0, 1);
    this.ThreeIconGroup.renderDepth = 10;

    this.hull = new model.ShipSpriteHull(this.shipDesign)
    this.modules = new model.ShipSpriteModules(this.shipDesign);
    this.selected = new model.ShipSpriteSelected(this.ship);
    this.sprites.push(this.hull);
    this.sprites.push(this.modules);
    this.sprites.push(this.selected);

    var moduleImageType = 'over';
    this.shipDesign.modules.forEach(function(module){
        var image = module.image.getByType(moduleImageType);

        if (image)
        {
            module.sprite = new model.ShipSpriteTurret(module, this.shipDesign);
            this.sprites.push(module.sprite);
        }
    }, this);

    this.sprites.forEach(function(sprite){this.ThreeIconGroup.add(sprite.getObject3d());}, this);

    return this;
};

model.ShipIcon.prototype.addObject = function(obj)
{
    this.ThreeIconGroup.add(obj);
};

model.ShipIcon.prototype.removeObject = function(obj)
{
    this.ThreeIconGroup.add(obj);
};

model.ShipIcon.prototype.getThreeObject = function()
{
    return this.ThreeIconGroup;
};

model.ShipIcon.prototype.onZoom = function(event)
{
};



model.AsteroidIcon = function AsteroidIcon(asteroid)
{
    this.asteroid = asteroid;
    this.object3d = null;
    this.initialScale = null;
    this.z = 0;
};

model.AsteroidIcon.prototype =  Object.create(model.Sprite.prototype);

model.AsteroidIcon.prototype.getObject3d = function()
{
    this.object3d = this.createObject3d();
    this.setInitialScale();
    this.requestImageDataToCallback();

    return this.object3d;
};

model.AsteroidIcon.prototype.requestImageDataToCallback = function()
{

};

model.AsteroidIcon.prototype.setInitialScale = function()
{
    var scale = asteroid.radius / 100;
    this.object3d.scale.set(100, 100, 1);
};

model.AsteroidIcon.prototype.receiveImageData = function(data)
{
    this.object3d.material.map = this.createTexture(data);
};