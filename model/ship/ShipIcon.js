model.ShipIcon = function ShipIcon(ship, dispatcher)
{
    this.ship = ship;
    this.shipDesign = ship.shipDesign;
    this.ThreeIconGroup = null;
    this.sprites = [];

    this.hull = null;
    this.modules = null;
    this.selected = null;

    this.hidden = true;
    this.hullHidden = false;

    dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
};

model.ShipIcon.prototype.create = function()
{
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
    var zoom = event.zoom;

    if (! this.hullHidden && zoom > 1)
    {
        this.hull.hide();
        this.selected.hide();
        this.hullHidden = true;
    }
    else if (this.hullHidden && zoom <= 1)
    {
        this.hull.show();
        this.selected.show();
        this.hullHidden = false;
    }

};

model.ShipIcon.prototype.hide = function()
{
    this.ThreeIconGroup.traverse(function (object){
        object.visible = false;
    });

    this.hidden = true;
};

model.ShipIcon.prototype.show = function()
{
    this.ThreeIconGroup.traverse(function (object){
        object.visible = true;
    });

    this.hidden = false;
};

model.ShipIcon.prototype.setPosition = function(pos)
{
    this.getThreeObject().position = new THREE.Vector3(pos.x, pos.y, 0);

    if (this.hidden)
        this.show();
};
