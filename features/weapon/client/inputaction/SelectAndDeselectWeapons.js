model.inputAction.SelectAndDeselectWeapons = function SelectAndDeselectWeapons(
    dispatcher,
    gameActionManger
)
{
    this._dispatcher = dispatcher;
    this._gameActionManager = gameActionManger;

    this._weaponClickedCallback = null;
}

model.inputAction.SelectAndDeselectWeapons.prototype.onActivation = function(event, inputMode, inputState)
{
    this._weaponClickedCallback = this._dispatcher.attach(
        'WeaponClickedEvent',
        this._onWeaponClicked.bind(this, inputState)
    );
};

model.inputAction.SelectAndDeselectWeapons.prototype.onDeactivation = function()
{
    this._dispatcher.detach('WeaponClickedEvent', this._weaponClickedCallback);
};

model.inputAction.SelectAndDeselectWeapons.prototype._onWeaponClicked = function(inputState, event)
{
    var clickedModule = event.module;
    var weapons = inputState.get('selectedWeapons');

    var found = Boolean(weapons.filter(function(module){
        return module.equals(clickedModule);
    }).pop());

    if (found){
        weapons = weapons.filter(function(module){
            return ! module.equals(clickedModule);
        })
        inputState.set('selectedWeapons', weapons);
        this._dispatcher.dispatch({name: "weaponDeselectedEvent", module: clickedModule, modules: weapons});

        if (weapons.length === 0){
            this._gameActionManager.removeWeaponMode();
        }
    }
    else
    {
        weapons.push(clickedModule);
        inputState.set('selectedWeapons', weapons);
        this._dispatcher.dispatch({name: "weaponSelectedEvent", module: clickedModule, modules: weapons});
    }
};
