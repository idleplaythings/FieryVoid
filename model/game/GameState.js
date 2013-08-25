model.GameState = function GameState(currentTime)
{
    this.currentGametime = currentTime;

    this.currentDisplayGameTime = currentTime;
    this.currentDisplayTarget = currentTime;
};

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