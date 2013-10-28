describe("Mathlib", function() {

    var noop = function(){};

    beforeEach(function() {

    });

    it("Comparing angles 350 -> 270 = -80", function() {
        expect(MathLib.distanceBetweenAngles(350, 270)).toEqual({ cw : 280, ccw : -80 } );
    });

    it("Comparing angles 350 -> 20 = 30", function() {
        expect(MathLib.distanceBetweenAngles(350, 20)).toEqual({ cw : 30, ccw : -330 });
    });

    it("Comparing angles 350 -> 170 = 180", function() {
        expect(MathLib.distanceBetweenAngles(350, 170)).toEqual({ cw : 180, ccw : -180 } );
    });

    it("Comparing angles 20 -> 200 = 180", function() {
        expect(MathLib.distanceBetweenAngles(20, 200)).toEqual({ cw : 180, ccw : -180 });
    });

    it("Comparing angles 20 -> 90 = 70", function() {
        expect(MathLib.distanceBetweenAngles(20, 90)).toEqual({ cw : 70, ccw : -290 });
    });

    it("Comparing angles 20 -> 300 = -80", function() {
        expect(MathLib.distanceBetweenAngles(20, 300)).toEqual({ cw : 280, ccw : -80 });
    });

    it("Comparing angles 0 -> 300 = -60", function() {
        expect(MathLib.distanceBetweenAngles(0, 300)).toEqual({ cw : 300, ccw : -60 } );
    });

    it("Comparing angles 0 -> 170 = 170", function() {
        expect(MathLib.distanceBetweenAngles(0, 170)).toEqual({ cw : 170, ccw : -190 });
    });

    it("turning a vector 45 degrees", function() {
        expect(MathLib.turnVector({x:50, y:0}, 45)).toEqual({ x : 35.35533845424652, y : 35.35533845424652 });
    });
});
