
Template.smallHullImage.rendered = function(){
    var self = this;
    self.hullcanvas = self.find('.hullcanvas');

    var hullImgName = self.data.img || self.data.hullImgName;
    var color = self.data.color || '255,255,255';

    if ( ! self.shiphullimage)
        self.shiphullimage = new model.CompositeImageShipHull({
            hullImgName: hullImgName,
            color: color
        });

    console.log('rendered');
    console.log(self.data)
    self.shiphullimage.getImageDataToCallback(
        jQuery.proxy(Template.smallHullImage.receiveImageData, self));
};

Template.smallHullImage.receiveImageData = function(img)
{
    console.log('received');
    var self = this;
    var data = img.data;

    var drawingTool = window.Tools.getCanvasDrawingTool();
    drawingTool.resizeToFitAndDrawToMiddle(
        self.hullcanvas, data);
};