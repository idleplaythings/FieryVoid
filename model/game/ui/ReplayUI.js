model.ReplayUI = function ReplayUI(gameState)
{
    console.log(gameState);
    this.gameState = gameState;
};

model.ReplayUI.prototype.create = function()
{
    var back = jQuery('<li><a class="button outside" href="">-</a></li>')
    back.on('click', this.back.bind(this));

    var current = jQuery('<li> 10s </li>');

    var forward = jQuery('<li><a class="button outside" href="">+</a></li>')
    forward.on('click', this.forward.bind(this));

    var container = jQuery('<ul></ul>');

    container.append(back);
    container.append(current);
    container.append(forward);

    container.appendTo('#gameBar');
};

model.ReplayUI.prototype.forward = function()
{
    this.gameState.forwardOne();
};

model.ReplayUI.prototype.back = function()
{
    console.log("back");
    console.log(this.gameState);
    this.gameState.backOne();
};