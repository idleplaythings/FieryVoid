model.GameState = function GameState(dispatcher)
{
    this.currentGameTurn = 0;
    this.currentDisplayTurn = 0;
    this.currentDisplayGameTime = 0;
    this.currentDisplayTarget = null;

    this._turnTime = 10000;
    
    this._dispatcher = dispatcher;
};

model.GameState.prototype.getTurn = function()
{
    return this.currentGameTurn;
};

model.GameState.prototype.startTurn = function()
{
    this._dispatcher.dispatch({name: 'TurnStart', turn: this.currentGameTurn});
};

model.GameState.prototype.endTurn = function()
{
    this._dispatcher.dispatch({name: 'TurnEnd', turn: this.currentGameTurn});
};

model.GameState.prototype.setTurn = function(turn)
{
    this.currentGameTurn = turn;
    this.currentDisplayTurn = turn;
};

model.GameState.prototype.getTurnStartTime = function(turn)
{
    return turn * this._turnTime;
};

/*
model.GameState.prototype.getCurrentGameTime = function()
{
    return this.currentGametime;
};

model.GameState.prototype.getCurrentGameTimeInSeconds = function()
{
    return this.currentGametime / 1000;
};
*/

model.GameState.prototype.advanceGameTimeTo = function(target)
{
    this.currentDisplayTarget = target;
    this._changeGameTime();
};

model.GameState.prototype._changeGameTime = function(lastTime)
{
    if (this.currentDisplayTarget === null)
        return;

    var timeLeft = this.currentDisplayTarget - this.currentDisplayGameTime;
    var step = (timeLeft < 0 ) ? -1 : 1;

    var now =  (new Date()).getTime();
    var end = false;

    if (lastTime)
    {
        var elapsed = (now - lastTime);
        if (Math.abs(timeLeft) < elapsed)
        {
            end = true;
            elapsed = timeLeft * step;
        }

        this.currentDisplayGameTime += elapsed * step;
    }

    lastTime = now;

    if ( ! end){
        requestAnimationFrame(
            this._changeGameTime.bind(this, lastTime));
    }else{
        this.endReplay();
    }
};

model.GameState.prototype.getCurrentDisplayTurn = function()
{
    return this.currentDisplayTurn;
};

model.GameState.prototype.getCurrentDisplayTime = function()
{
    return this.currentDisplayGameTime / 100;
};

model.GameState.prototype.replay = function()
{
    this.currentDisplayTurn = this.currentGameTurn -1;
    this.currentDisplayGameTime = 0;
    this.advanceGameTimeTo(9999);
};

model.GameState.prototype.endReplay = function()
{
    this.currentDisplayTarget = null;
    this.currentDisplayTurn = this.currentGameTurn;
    this.currentDisplayGameTime = 0;
    this._dispatcher.dispatch({name: 'ReplayEnd', turn:this.currentGameTurn});
};

model.GameState.prototype.backOne = function()
{
    var target = this.currentDisplayTarget - 10000;
    if (target < 0)
        target = 0;

    this.advanceGameTimeTo(target);
};