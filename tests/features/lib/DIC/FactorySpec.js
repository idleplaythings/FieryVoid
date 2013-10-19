describe("Factory", function() {
    var factory;

    beforeEach(function() {
        factory = new Factory();
    });

    it("return constants", function() {
        factory.add('someKey', 'someValue');

        expect(factory.create('someKey')).toBe('someValue');
    });

    it("should call callbacks", function() {
        factory.add('someKey', function() {
            return 'someValue';
        });

        expect(factory.create('someKey')).toEqual('someValue');
    })
});