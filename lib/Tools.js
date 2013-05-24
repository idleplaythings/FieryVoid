this.Tools =
{
    canvasDrawingTool: null,

    getCanvasDrawingTool: function()
    {
        if (Tools.canvasDrawingTool === null)
        {
            Tools.canvasDrawingTool = new model.DrawingToCanvas(null);
        }

        return Tools.canvasDrawingTool;
    },

    coordinateConverterTool: null,

    getCoordinateConverterTool: function()
    {
        if (Tools.coordinateConverterTool === null)
        {
            Tools.coordinateConverterTool = new model.CoordinateConverter(null);
        }

        return Tools.coordinateConverterTool;
    },

    getMouseCoordinatesInElement: function(event)
    {
        var totalOffsetX = 0;
        var totalOffsetY = 0;
        var currentElement = event.target;

        do
        {
            totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
            totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
        }
        while(currentElement = currentElement.offsetParent)

        var x = event.pageX - totalOffsetX;
        var y = event.pageY - totalOffsetY;

        return {x:x, y:y};
    }
}