describe("Ship movement", function() {

     it("Thrust moment, under center moving forward", function() {
         var movement = getMovement({x:0, y:1});

         var moment = movement.getThrustMoment(getModule( {x:1, y:0}))
         expect(moment).toEqual(1);
     });

     it("Thrust moment, under center, moving back", function() {
         var movement = getMovement({x:0, y:1});

         var moment = movement.getThrustMoment(getModule({x:-1, y:0}))
         expect(moment).toEqual(-1);
     });

     it("Thrust moment, above center, moving forward", function() {
         var movement = getMovement({x:0, y:-1})

         var moment = movement.getThrustMoment(getModule({x:1, y:0}))
         expect(moment).toEqual(-1);
     });

     it("Thrust moment, above center, moving back", function() {
         var movement = getMovement({x:0, y:-4})

         var moment = movement.getThrustMoment(getModule({x:-3, y:0}))
         expect(moment).toEqual(12);
     });

     it("Thrust moment, thrustinc directly towards mass center", function() {
         var movement = getMovement({x:3, y:3})

         var moment = movement.getThrustMoment(getModule({x:-3, y:-3}), {x:0, y:0})
         expect(moment).toEqual(0);
     });

     it("Thrust moment, thrustin directly towards mass center on x", function() {
         var movement = getMovement({x:3, y:0})

         var moment = movement.getThrustMoment(getModule({x:-3, y:0}), {x:0, y:0})
         expect(moment).toEqual(0);
     });

    it("Thrust moment, thrustin directly towards mass center on x", function() {
        var movement = getMovement({x:3, y:0})

        var moment = movement.getThrustMoment(getModule({x:-3, y:0}), {x:0, y:0})
        expect(moment).toEqual(0);
    });

    it("Thrust moment, front, thrusting down", function() {
        var movement = getMovement({x:3, y:1})

        var moment = movement.getThrustMoment(getModule({x:0, y:1}))
        expect(moment).toEqual(-3);
    });

    function getMovement(pos)
    {
        var movement = new model.MovementResolver();

        movement.getModulePositionRelativeToMassCenter = function()
        {
            return pos;
        };

        return movement;
    }

    function getModule(force)
    {
        return {getThrustForceVector: function(){return force;}};
    }
});
