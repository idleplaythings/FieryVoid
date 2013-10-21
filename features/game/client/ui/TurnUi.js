model.TurnUi = function TurnUi(gameid, gameState)
{
    this._gameid = gameid;
    this._gameState = gameState;
    this._button = null;
    this._active = false;
};

model.TurnUi.prototype.create = function()
{
    this._button = jQuery('<button class="circle big">⎋</div>')
    this._button.on('click', this.changeTurn.bind(this));
    this._button.appendTo('#gameBar');
};

model.TurnUi.prototype.changeTurn = function()
{
    if (this._active)
        return;

    Meteor.call(
        'submitTurn',
        this._gameid,
        this.turnChanged.bind(this)
    );

    this._active = true;
    jQuery('body').addClass('progress');
    this._button.addClass('progress');
};

model.TurnUi.prototype.turnChanged = function(err, result)
{
    jQuery('body').removeClass('progress');
    this._button.removeClass('progress');
    this._active = false;
};