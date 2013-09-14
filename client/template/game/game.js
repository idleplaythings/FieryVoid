Template.game.created = function()
{
    var gameId = Session.get('active_game');

    var subscription = Meteor.subscribe("currentGame", gameId);

    Deps.autorun(function(){

        if (Template.game.activeGameObject)
            return;

        if (subscription.ready())
        {
            var game = getGame(gameId);
            game.play();
            Template.game.activeGameObject = game;
        }
    });
}

Template.game.destroyed = function()
{
    Session.set('active_game', null);
    console.log("game destroyed");
    Template.game.activeGameObject = null;
}

Template.game.activeGameObject = null;