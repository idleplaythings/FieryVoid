describe("SelectedShipMarker", function() {

    var dispatcher, selectedShip, ship, icon;

    beforeEach(function() {
        
        dispatcher = jasmine.createSpyObj(
            'Dispatcher',
            [ 'attach', 'dispatch' ]
        );

        icon = jasmine.createSpyObj(
            'icon',
            [ 'select', 'deselect' ]
        );

        ship = {getIcon: function(){return icon}};

        selectedShip = {getShip: function(){}};
    });

    it("should show attach to relevant events", function() {

        var selectAction = new model.inputAction.SelectedShipMarker(dispatcher, selectedShip);
    
        expect(dispatcher.attach.calls[0].args[0]).toBe('ShipSelectedEvent');
        expect(dispatcher.attach.calls[1].args[0]).toBe('ShipDeselectedEvent');
        expect(dispatcher.attach.calls.length).toBe(2);
    });

    it("should show selected ship marker when ship is selected", function() {

        var event = {ship: ship};

        var selectAction = new model.inputAction.SelectedShipMarker(dispatcher, selectedShip);
        selectAction.onShipSelected(event);

        expect(icon.select).toHaveBeenCalled();
    });

    it("should show remove selected ship marker when ship is deselected", function() {

        var event = {ship: ship};

        var selectAction = new model.inputAction.SelectedShipMarker(dispatcher, selectedShip);
        selectAction.onShipDeselected(event);

        expect(icon.deselect).toHaveBeenCalled();
    });

    it("should show selected ship marker on selected ship when activated and a ship is selected", function() {

        spyOn(selectedShip, 'getShip').andReturn(ship);
        var selectAction = new model.inputAction.SelectedShipMarker(dispatcher, selectedShip);
        selectAction.onActivation();

        expect(icon.select).toHaveBeenCalled();
    });

    it("should show remove ship marker on selected ship when deactivated and a ship is selected", function() {

        spyOn(selectedShip, 'getShip').andReturn(ship);
        var selectAction = new model.inputAction.SelectedShipMarker(dispatcher, selectedShip);
        selectAction.onDeactivation();

        expect(icon.deselect).toHaveBeenCalled();
    });

    it("should not do anything on deactivation or activation, if ship is not selected", function() {

        spyOn(selectedShip, 'getShip').andReturn(null);
        var selectAction = new model.inputAction.SelectedShipMarker(dispatcher, selectedShip);
        selectAction.onDeactivation();

        expect(icon.deselect).not.toHaveBeenCalled();
        expect(icon.select).not.toHaveBeenCalled();
    });

});
