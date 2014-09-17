model.inputAction.ShowCurrentFireOrders = function ShowCurrentFireOrders(
  weaponIndicatorService,
  selectedShip,
  gameState,
  shipService,
  weaponFireFactory,
  dispatcher
  )
{
  this._weaponIndicatorService = weaponIndicatorService;
  this._selectedShip = selectedShip;
  this._gameState = gameState;
  this._shipService = shipService;
  this._weaponFireFactory = weaponFireFactory;
  this._dispatcher = dispatcher;
 
  this._fireOrdersChangedCallback = null;
}

model.inputAction.ShowCurrentFireOrders.prototype.onActivation = function()
{
  showFireOrders.call(this);
  this._fireOrdersChangedCallback = this._dispatcher.attach('fireOrdersChanged', showFireOrders.bind(this));
};

model.inputAction.ShowCurrentFireOrders.prototype.onDeactivation = function()
{
  this._weaponIndicatorService.removeAll();
  this._dispatcher.detach('fireOrdersChanged', this._fireOrdersChangedCallback);
};

var showFireOrders = function(){
  var turn = this._gameState.getTurn();
  this._shipService.getShips().forEach(function(ship){
    ship.getWeapons().filter(function(weapon){
      return weapon.hasFireOrder(turn);
    }).forEach(function(weapon){
      var weaponFire = this._weaponFireFactory.getWeaponFireFromFireOrder(weapon.getFireOrder(turn));

      this._weaponIndicatorService.addLine(
        weaponFire._shooter, 
        weaponFire._target,
        weaponFire._weapon, 
        weaponFire._targetTile, 
        turn, 
        {}
        );
    }, this);
  }, this);
}