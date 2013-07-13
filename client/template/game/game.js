Template.game.created = function()
{
    console.log("game created");
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
    console.log("game destroyed");
    Template.game.activeGameObject = null;
}

Template.game.activeGameObject = null;