model.ShipIcon = function ShipIcon(shipDesign, dispatcher)
{
    this.shipDesign = shipDesign;
    this.ThreeIconGroup = null;
    this.sprites = [];
    this.dispatcher = dispatcher;

    this.hull = null;
    this.modules = null;

    this.dispatcher.attach(new model.EventListener(
        "ZoomEvent",
        jQuery.proxy(this.onZoom, this)));
};

model.ShipIcon.prototype.create = function()
{
    this.ThreeIconGroup = new THREE.Object3D();
    this.ThreeIconGroup.position = new THREE.Vector3(0, 0, 1);
    this.ThreeIconGroup.renderDepth = 10;

    this.hull = new model.ShipSpriteHull(this.shipDesign)
    this.modules = new model.ShipSpriteModules(this.shipDesign);
    this.sprites.push(this.hull);
    this.sprites.push(this.modules);

    var moduleImageType = 'over';
    this.shipDesign.modules.forEach(function(module){
        var image = module.image.getByType(moduleImageType);

        if (image)
        {
            module.sprite = new model.ShipSpriteTurret(module, this.shipDesign);
            this.sprites.push(module.sprite);
        }
    }, this);

    this.sprites.forEach(function(sprite){this.ThreeIconGroup.add(sprite.getSprite());}, this);

    return this;
};

model.ShipIcon.prototype.getThreeObject = function()
{
    console.log(this.ThreeIconGroup);
    return this.ThreeIconGroup;
};

model.ShipIcon.prototype.onZoom = function(event)
{
    if (! event.zoom)
        return;

    this.sprites.forEach(
        function(shipSprite){
            shipSprite.setZoom(event.zoom)
        });
};
