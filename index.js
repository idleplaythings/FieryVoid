if (Meteor.isClient) {

    Meteor.subscribe("directory");

    Meteor.startup(function () {
        Deps.autorun(function () {

            //var shipLayout = new model.ShipLayout({hullName:"hull1"});
            //var ship = new model.Ship({id:1, shipLayout:shipLayout});

            /*
            if ( ! Session.get("selectedShip"))
            {
                window.gameState = new model.GameState();

                var shipLayout = new model.ShipLayout({hullName:"hull1"});
                var ship = new model.Ship({id:1, shipLayout:shipLayout});
                Session.set("selectedShipId", ship);
            }
            */
        });
    });

    /*
    Template.hello.greeting = function () {
    return "Welcome to FieryVoid2Meteor.";
    };

    Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
    });

    */


}