Template.game.rendered = function()
{
    var gameId = Session.get('active_game');
    var game = new model.GameStorage().getGame(gameId);

    game.play();
};
