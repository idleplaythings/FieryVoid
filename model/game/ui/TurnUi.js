model.TurnUi = function TurnUi(gameid, gameState)
{
    this._gameid = gameid;
    this._gameState = gameState;
};

model.TurnUi.prototype.create = function()
{
    var turnbutton = jQuery('<button class="circle big">⎋</div>')
    turnbutton.on('click', this.changeTurn.bind(this));

    turnbutton.appendTo('#gameBar');
};

model.TurnUi.prototype.changeTurn = function()
{
    Meteor.call(
        'submitTurn',
        this._gameid,
        function(err, result){
            console.log(err, result);
        }
    );
};