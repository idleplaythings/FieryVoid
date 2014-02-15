model.DamageManagement = function DamageManagement(
    ship, modules, timeline, movement)
{
    model.ShipStatusManager.call(this, ship, modules, timeline);
    this.movement = movement;

    this.damageTile = new model.DamageTile();
};

model.DamageManagement.prototype = Object.create(model.ShipStatusManager.prototype);

model.DamageManagement.prototype.isDestroyedTile = function(position)
{
    return false;
};

model.DamageManagement.prototype.generateDamageLookup = function()
{
    var dim = {
        width: this.ship.shipDesign.hullLayout.width,
        height: this.ship.shipDesign.hullLayout.height
    }

    var canvas = document.createElement('canvas');
    var imageData = canvas.getContext('2d').createImageData(dim.width, dim.height);
    var imageDataDetails = canvas.getContext('2d').createImageData(dim.width, dim.height);

    for (var x = 0; x < dim.width; x++)
    {
        for (var y = 0; y < dim.height; y++)
        {
            this.getDamageTile()
                .setPosition({x:x, y:y})
                .setDamageLookup(imageData, dim)
                .setDamageLookup2(imageDataDetails, dim);

            this.getRandomDamage(imageData, imageDataDetails, {x:x, y:y}, dim);
        }
    }
    /*
    this.getDamageTile()
        .setPosition({x:7, y:2})
        .setTexture(1)
        .setBrush(12)
        .setOpacity(0.5)
        .setScale(0.5)
        .setDamageLookup(imageData, dim)
        .setDamageLookup2(imageDataDetails, dim);
    */

    this.ship.getIcon().setDamageLookup('hull', imageData, imageDataDetails);
};

model.DamageManagement.prototype.subscribeToScene = function(
    gameScene, effectManager, dispatcher, uiResolver, gridService)
{
    this.gameScene = gameScene;
    this.effectManager = effectManager;
    this.dispatcher = dispatcher;
    this.uiResolver = uiResolver;
    this.gridService = gridService;

    this.generateDamageLookup();
};


model.DamageManagement.prototype.addSmokeTrail = function(time, position)
{

    var smokeCount = 200;
    var step = 10000 / smokeCount;
    var path = [];
    while(smokeCount--)
    {
        var currentTime = time + step * smokeCount;
        var positionService = new model.ShipDesignPositionService(
            this.ship.shipDesign,
            this.movement.getScenePosition(currentTime),
            this.movement.getSceneFacing(currentTime)
        );

        path.unshift(positionService.getTilePositionInScene(position));
    }


    //this.effectManager.register(new model.ParticleEffectTrail(time, 'fire', {path:path}));
    this.effectManager.register(new model.ParticleEffectTrail(time, 'smoke', {path:path}));
};


model.DamageManagement.prototype.getDamageTile = function()
{
    return this.damageTile.reset();
};

model.DamageManagement.prototype.getRandomDamage = function(data, data2, position, dim)
{
    var scale = 0.3 + Math.random();
    var holeScale = Math.random() > 0.1 ? scale + 0.2 : 0;

    if (Math.random() > 0.9)
        return;

    this.getDamageTile()
        .setPosition(position)
        .setTexture(1)
        .setBrush(Math.floor(Math.random()*15))
        .setOpacity(Math.random()* 0.2 + 0.2)
        .setScale(scale)
        .setHoleSize(holeScale) //scale + 0.2)
        .setDamageLookup(data, dim)
        .setDamageLookup2(data2, dim);

    var module = this.ship.shipDesign.getModuleInPosition(position);

    if (module && Math.random() > 0.8)
    {
        this.addSmokeTrail(0, position);
        this.ship.getIcon().iconEffectManager.register(new model.ParticleEffectExplosion(
            {
                x: Math.floor(Math.random() * 200 - 100),
                y: Math.floor(Math.random() * 200 - 100),
            },
            Math.random()* 8000,
            {
                size: Math.random()* 50 + 10,
                type: Math.random() > 0.5 ? 'glow' : 'glow',
                speed: Math.random() + 1,
                ring: Math.random() > 0.9 ? true : false
            }
        ));
    }




};
