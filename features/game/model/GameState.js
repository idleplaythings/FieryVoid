model.GameState = function GameState(dispatcher)
{
    this.currentGameTurn = 0;
    this.currentDisplayGameTime = 0;
    this.currentDisplayTarget = 0;

    this._turnTime = 10000;
    
    this._dispatcher = dispatcher;
};

model.GameState.prototype.getTurn = function()
{
    return this.currentGameTurn;
};

model.GameState.prototype.startTurn = function(turn)
{
    this.currentGameTurn = turn;
    this._dispatcher.dispatch({name: 'TurnEvent', type:'start', turn: this.currentGameTurn});
};

model.GameState.prototype.endTurn = function()
{
    this._dispatcher.dispatch({name: 'TurnEvent', type:'end', turn: this.currentGameTurn});
};

model.GameState.prototype.startAnimation = function()
{
    this._dispatcher.dispatch({name: 'TurnEvent', type:'animationStart', turn: this.currentGameTurn});
};

model.GameState.prototype.endAnimation = function()
{
    this._dispatcher.dispatch({name: 'TurnEvent', type:'animationEnd', turn: this.currentGameTurn});
};

model.GameState.prototype.setTurn = function(turn)
{
    this.currentGameTurn = turn;

    this.currentDisplayGameTime = turn * this._turnTime;
    this.currentDisplayTarget = turn * this._turnTime;
};

model.GameState.prototype.changeTurn = function(turn)
{
    this._setTurn(turn);
    this.startTurn();
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

    if ( ! end)
        requestAnimationFrame(
            this._changeGameTime.bind(this, lastTime));
};

model.GameState.prototype.getCurrentDisplayTimeForUI = function()
{
    return this.currentDisplayGameTime;
};

model.GameState.prototype.forwardOne = function()
{
    this.advanceGameTimeTo(this.currentDisplayTarget + 10000);
};

model.GameState.prototype.backOne = function()
{
    var target = this.currentDisplayTarget - 10000;
    if (target < 0)
        target = 0;

    this.advanceGameTimeTo(target);
};