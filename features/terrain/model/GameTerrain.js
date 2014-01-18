model.GameTerrain = function GameTerrain(gameScene, container, seed, gridService)
{
    this.gameScene = gameScene;
    this.container = container;
    this.seed = seed;
    this._gridService = gridService;
    this.asteroidBelt = null;
};

model.GameTerrain.prototype.createRandom = function()
{
    Math.seedrandom(this.seed);

    this._createBackdrop();
    this._createStarField();
    this._createAsteroidBelt();

    return this;
}

model.GameTerrain.prototype._createBackdrop = function()
{
    this.container.css('background-color', 'black');
    this.container.css('background-image', 'url(/background/bluespace3.jpg)');
}

model.GameTerrain.prototype._createStarField = function()
{
    return false;
    var starFieldFactory = new model.StarFieldFactory({
        starCount: 1000
    })
    // @todo extract star field into its own model
    var starField = starFieldFactory.create();
    this.gameScene.scene.add(starField.starField);
    this.gameScene.animators.push(starFieldFactory);
}

model.GameTerrain.prototype._createAsteroidBelt = function()
{
    var asteroidBeltFactory = new model.AsteroidBeltFactory({
            beltCentre: { x: 10, y: 10 },
            asteroidCount: 300,
            minAsteroidRadius: 100,
            maxAsteroidRadius: 500,
            beltRadius: 10,
            beltWidth: 10
        },
        this._gridService
    );
    this.asteroidBelt = asteroidBeltFactory.create();

    this.gameScene.scene.add(this.asteroidBelt.mesh);
    this.gameScene.animators.push(this.asteroidBelt);
}
