model.inputAction.SelectWeaponMode = function SelectWeaponMode(
    dispatcher,
    gameActionManager
)
{
    this._dispatcher = dispatcher;
    this._gameActionManager = gameActionManager;

    this._weaponClickedCallback = null;
}


model.inputAction.SelectWeaponMode.prototype.onActivation = function()
{
    this._weaponClickedCallback = this._dispatcher.attach(
        'WeaponClickedEvent',
        this._onWeaponClicked.bind(this)
    );
};

model.inputAction.SelectWeaponMode.prototype.onDeactivation = function()
{
    this._dispatcher.detach('WeaponClickedEvent', this._weaponClickedCallback);
};

model.inputAction.SelectWeaponMode.prototype._onWeaponClicked = function(event)
{
    console.log("weapon clicked");
    this._gameActionManager.setWeaponMode([event.module]);
};