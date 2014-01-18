xdescribe('Game Controller', function() {
    var ctrl;
    var gameStorageMock;
    var gameMock;

    beforeEach(function() {
        gameStorageMock = jasmine.createSpyObj(
            'Storage',
            [ 'create', 'save' ]
        );
        gameMock = jasmine.createSpyObj(
            'Game',
            [ 'addPlayer' ]
        );

        ctrl = new controller.GameController(gameStorageMock);
    });

    it("creates a new game", function() {
        gameStorageMock.create.andReturn(gameMock);

        ctrl.StartGame(123, 456);

        expect(gameStorageMock.create).toHaveBeenCalled();
        expect(gameMock.addPlayer).toHaveBeenCalledWith(123);
        expect(gameMock.addPlayer).toHaveBeenCalledWith(456);
        expect(gameStorageMock.save).toHaveBeenCalledWith(gameMock);
    });
});