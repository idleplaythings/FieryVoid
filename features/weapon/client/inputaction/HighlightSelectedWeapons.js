model.inputAction.HighlightSelectedWeapons = function HighlightSelectedWeapons(
    dispatcher,
    actionBar
)
{
    this._dispatcher = dispatcher;
    this._actionBar = actionBar;

    this._weaponSelectedCallback = null;
    this._weaponDeselectedCallback = null;
}

model.inputAction.HighlightSelectedWeapons.prototype.onActivation = function(event, inputMode, inputState)
{
    console.log("activate weapon highlight")
    this._weaponSelectedCallback = this._dispatcher.attach(
        'weaponSelectedEvent',
        this._onWeaponSelected.bind(this, inputState)
    );

    this._weaponDeselectedCallback = this._dispatcher.attach(
        'weaponDeselectedEvent',
        this._onWeaponDeselected.bind(this, inputState)
    );

    this._actionBar.selectByModules(inputState.get('selectedWeapons'));
};

model.inputAction.HighlightSelectedWeapons.prototype.onDeactivation = function()
{
    this._dispatcher.detach('weaponSelectedEvent', this._weaponSelectedCallback);
    this._dispatcher.detach('weaponDeselectedEvent', this._weaponDeselectedCallback);
};

model.inputAction.HighlightSelectedWeapons.prototype._onWeaponSelected = function(inputState, event)
{
    this._actionBar.selectByModules(event.module);
};

model.inputAction.HighlightSelectedWeapons.prototype._onWeaponDeselected = function(inputState, event)
{
    this._actionBar.deselectByModules(event.module);
};
