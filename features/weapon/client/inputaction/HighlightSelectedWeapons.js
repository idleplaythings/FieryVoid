model.inputAction.HighlightSelectedWeapons = function HighlightSelectedWeapons(
    dispatcher,
    actionBar
)
{
    this._dispatcher = dispatcher;
    this._actionBar = actionBar;

    this._weaponClickedCallback = null;
}


model.inputAction.HighlightSelectedWeapons.prototype.onActivation = function(event, inputMode, inputState)
{
    this._weaponClickedCallback = this._dispatcher.attach(
        'WeaponClickedEvent',
        this._onWeaponClicked.bind(this, inputState)
    );

    this._actionBar.selectByModules(inputState.get('selectedWeapons'));
};

model.inputAction.HighlightSelectedWeapons.prototype.onDeactivation = function()
{
    this._dispatcher.detach('WeaponClickedEvent', this._weaponClickedCallback);
};

model.inputAction.HighlightSelectedWeapons.prototype._onWeaponClicked = function(inputState, event)
{
    console.log(arguments);

    var weapons = inputState.get('selectedWeapons');
    weapons.push(event.module);

    inputState.set('selectedWeapons', weapons);
    this._actionBar.selectByModules(weapons);
};
