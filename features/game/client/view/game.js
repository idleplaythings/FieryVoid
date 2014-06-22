Template.game.rendered = function()
{
  var gameId = this.data.gameId;

  Meteor.subscribe('currentGame', gameId, function(){
    var gameStorage = dic.get('model.GameStorage');
    var game = gameStorage.getGame(gameId);

    Deps.autorun(function(){
      var doc = Games.findOne({_id: gameId});
      game.updated(doc);
    });

    game.play();
  });
};
