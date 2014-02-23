model.GameClient = function GameClient(inputModeFactory)
{
    this._inputModeFactory = inputModeFactory;

    // injected from outside
    this._gameScene;
    this._gameState;
    this._shipService;
    this._uiEventResolver;
    this._coordinateConverter;
};

model.GameClient.prototype.load = function()
{
};

model.GameClient.prototype.play = function()
{
    var inputMode = this._inputModeFactory.create('select');
    inputMode.shipService = this._shipService;
    inputMode.coordinateConverter = this._coordinateConverter;

    this._uiEventResolver.addInputMode(inputMode);

    // this.uiEventResolver.addInputMode(
    //  this.InputModeFactory.construct(
    //      'InputModeSelect',
    //      {
    //          shipService: this.shipService
    //      })
    // );
}