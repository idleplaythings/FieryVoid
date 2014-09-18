getRandomShipDesignIdForPlayer = function(playerId) {
    var shipDesigns = ShipDesigns.find().fetch();

    if (shipDesigns.length === 0) {
        return null;
    }

    var randomIndex = Math.floor(Math.random() * shipDesigns.length);
    return shipDesigns[randomIndex]._id;
};
