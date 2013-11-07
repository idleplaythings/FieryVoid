Template.game.rendered = function()
{
	var gameId = this.data.gameId;
	
	Meteor.subscribe('currentGame', gameId, function(){
		var gameStorage = dic.get('model.GameStorage');
		var game = gameStorage.getGame(gameId);

		game.play();
	});
};
