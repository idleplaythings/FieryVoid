
Template.hullListing.hullImages = function () {
    var hulls = HullImages.find({});
    console.log(hulls);
    return hulls;
};

Template.hullImage.selected = function () {
    return '';
};

Template.hullImage.rendered = function () {
    console.log("small hull rendered")
    var self = this;
    self.hullcanvas = self.find('.hullcanvas');

    console.log(self);
    var hullimage = new model.ShipHullCompositeImage({hullName: self.data.img});

    hullimage.getImageDataToCallback(
        jQuery.proxy(Template.hullImage.receiveImageData, self));
};

Template.hullImage.receiveImageData = function(img)
{
    var self = this;

    console.log("smallhull receiveImageData");
    var data = img.data;

    var drawingTool = window.Tools.getCanvasDrawingTool();
    drawingTool.resizeToFitAndDrawToMiddle(
        self.hullcanvas, data);
};

Template.hullImage.hullLayouts= function()
{

};