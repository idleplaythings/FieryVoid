model.inputAction.SelectWeapon = function SelectWeapon(
    dispatcher,
    gameActionManager
)
{
    this._dispatcher = dispatcher;
    this._gameActionManager = gameActionManager;

    this._weaponClickedCallback = null;
}


model.inputAction.SelectWeapon.prototype.onActivation = function()
{
    this._weaponClickedCallback = this._dispatcher.attach(
        'WeaponClickedEvent',
        this._onWeaponClicked.bind(this)
    );
};

model.inputAction.SelectWeapon.prototype.onDeactivation = function()
{
    this._dispatcher.detach('WeaponClickedEvent', this._weaponClickedCallback);
};

model.inputAction.SelectWeapon.prototype._onWeaponClicked = function(event)
{
    console.log("weapon clicked");
    this._gameActionManager.setWeaponSelectedMode([event.module]);
};