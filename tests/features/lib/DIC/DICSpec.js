describe("Dependency Injection Container", function() {
    function DepA() {
        this.name = 'DepA';
    }

    function DepB() {
        this.name = 'DepB';
    }

    function Test(depA, depB) {
        this.depA = depA;
        this.depB = depB;
    }

    var dic;

    beforeEach(function() {
        dic = new DIC();
    });

    it("should build classes", function() {
        dic.register('test.DepA', function(dic) {
            return new DepA();
        });
        dic.register('test.DepB', function(dic) {
            return new DepB();
        });
        dic.register('test.Test', function(dic) {
            return new Test(dic.get('test.DepA'), dic.get('test.DepB'));
        });

        var test = dic.get('test.Test');

        expect(test.depA.name).toEqual('DepA');
        expect(test.depB.name).toEqual('DepB');
    });

    it("should build scalar values", function() {
        dic.register('config.username', function() {
            return "John";
        });
        dic.register('config.password', 'foobar');

        expect(dic.get('config.username')).toEqual('John');
        expect(dic.get('config.password')).toEqual('foobar');
    });

    it("should share services", function() {
        dic.register('shared.DepA', function(dic) {
            return new DepA();
        }, {
            shared: true
        });

        var test1 = dic.get('shared.DepA');
        var test2 = dic.get('shared.DepA');

        expect(test1).toBe(test2);
    });

    it("should throw an exception for an unknown key", function() {
        expect(function() { dic.get('foobar'); }).toThrow();
    });

    it("should allow tagging factories", function() {
        dic.register('some_service.components', function(dic) {
            return dic.getTagged('some_service');
        });

        dic.register('some_service.component1', function(dic) {
            return {
                name: 'component1'
            };
        }, {
            tags: [ 'some_service' ]
        });

        dic.register('some_service.component2', function(dic) {
            return {
                name: 'component2'
            };
        }, {
            tags: [ 'some_service' ]
        });

        var components = dic.get('some_service.components');

        expect(components).toContain('some_service.component1');
        expect(components).toContain('some_service.component2');
    });
});
