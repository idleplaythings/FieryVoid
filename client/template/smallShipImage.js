
Template.smallShipImage.rendered = function(){
    var self = this;
    var target = jQuery(self.find('.shipImageTarget'));
    var ship = self.data;

    var shipView = new model.ShipViewShipIcon(target);
    shipView.drawImages(ship);
};

Template.smallShipImage.shipType = function()
{
    if (this.width && this.height)
    {
        var size = this.width * this.height;

        if (size < 800)
        {
            return '♙';
        }
        else if (size < 1500)
        {
            return '♘'
        }
        else
        {
            return '♖';
        }
        console.log(size);
    }
    return '';
}