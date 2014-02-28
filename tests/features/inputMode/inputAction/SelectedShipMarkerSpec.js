describe("SelectedShipMarker", function() {

    var dispatcher, selectedShip, ship, icon, selectedShipMarker;

    beforeEach(function() {
        this.addMatchers(customMatchers);

        dispatcher = jasmine.createSpyObj('Dispatcher', [ 'attach', 'dispatch' ]);
        icon = jasmine.createSpyObj('icon', [ 'select', 'deselect' ]);

        ship = { getIcon: function(){ return icon }};
        selectedShip = { getShip: function() { }};

        selectedShipMarker = new model.inputAction.SelectedShipMarker(dispatcher, selectedShip);
    });

    it("should attach to relevant events", function() {
        expect(dispatcher).toHaveListenerFor('ShipSelectedEvent');
        expect(dispatcher).toHaveListenerFor('ShipDeselectedEvent');
        expect(dispatcher.attach.calls.length).toBe(2);
    });

    it("should show selected ship marker when ship is selected", function() {
        selectedShipMarker.onShipSelected({ ship: ship });

        expect(icon.select).toHaveBeenCalled();
    });

    it("should show remove selected ship marker when ship is deselected", function() {
        selectedShipMarker.onShipDeselected({ ship: ship });

        expect(icon.deselect).toHaveBeenCalled();
    });

    it("should show selected ship marker for selected ship on activation", function() {
        spyOn(selectedShip, 'getShip').andReturn(ship);

        selectedShipMarker.onActivation();

        expect(icon.select).toHaveBeenCalled();
    });

    it("should show selected ship marker for selected ship on deactivation", function() {
        spyOn(selectedShip, 'getShip').andReturn(ship);

        selectedShipMarker.onDeactivation();

        expect(icon.deselect).toHaveBeenCalled();
    });
});
