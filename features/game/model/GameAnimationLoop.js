model.GameAnimationLoop = function GameAnimationLoop(gameState, gameScene, gameContainer)
{
	this._gameState = gameState;
	this._gameScene = gameScene;
	this._gameContainer = gameContainer;

	this._stats = null;

	this._animators = [];
};

model.GameAnimationLoop.prototype.start = function()
{
	this._stats = this._gameContainer.addStats();
	this._animate();
};

model.GameAnimationLoop.prototype._animate = function()
{
    requestAnimationFrame( this._animate.bind(this) );

    var turn = this._gameState.getCurrentDisplayTurn();
    var time = this._gameState.getCurrentDisplayTime();

    this._stats.begin();

    this._animators.forEach(function(animator){
    	animator.animate(turn, time);
    }, this);

    this._gameScene.render();
    this._stats.end();
};

model.GameAnimationLoop.prototype.register = function(animee)
{
   	this._animators.push(animee);
};
