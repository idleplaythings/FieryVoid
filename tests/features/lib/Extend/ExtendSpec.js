describe("Indirect Extending", function() {
    it("should extend classes", function() {
        function Parent() {
            this.someValue = 123;
        }
        Parent.prototype.greet = function() {
            return 'Hello';
        };
        Parent.prototype.test = function() {
            return 'Test';
        };

        function Child() {
            this.super.apply(this, arguments);
            this.role = 'Child';
        }
        Child.prototype.greet = function() {
            return 'Ohai';
        };

        Extend.register(Parent);
        Extend.register(Child, 'Parent');
        Extend.resolve();

        var child = new Child();
        expect(child.greet()).toEqual('Ohai');
        expect(child.someValue).toEqual(123);
        expect(child.test()).toEqual('Test');
    });
});
