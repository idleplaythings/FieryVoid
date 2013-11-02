model.GameTerrain = function GameTerrain(gameScene, container, seed)
{
    this.gameScene = gameScene;
    this.container = container;
    this.seed = seed;
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
        beltCentre: { x: 0, y: 0 },
        asteroidCount: 2000,
        minAsteroidRadius: 100,
        maxAsteroidRadius: 500,
        beltRadius: 20000,
        beltWidth: 50000
    });
    var asteroidBelt = asteroidBeltFactory.create();

    this.gameScene.scene.add(asteroidBelt.mesh);
    this.gameScene.animators.push(asteroidBelt);
}
