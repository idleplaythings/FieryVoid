
Template.smallShipDesignImage.rendered = function(){
    var self = this;
    var target = jQuery(self.find('.shipImageTarget'));
    var shipDesign = self.data;

    new model.ShipDesignIconOnCanvas(shipDesign).drawTo(target);
};
