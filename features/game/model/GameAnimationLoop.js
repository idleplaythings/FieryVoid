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

    this._stats.begin();

    this._animators.forEach(function(animator){
    	animator.animate(
    		this._gameState.getCurrentDisplayTurn(), 
    		this._gameState.getCurrentDisplayTime());
    });

    this._gameScene.render();
    this._stats.end();
};

model.GameAnimationLoop.prototype.register = function(animee)
{
   	this._animators.push(animee);
};
