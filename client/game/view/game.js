Template.game.rendered = function()
{
    var gameId = Session.get('active_game');
    var game = new model.GameStorage().getGame(gameId);

    Template.game.activeGameObject = game;
    game.play();
}

Template.game.destroyed = function()
{
    Session.set('active_game', null);
    console.log("game destroyed");
    Template.game.activeGameObject = null;
}

Template.game.activeGameObject = null;
