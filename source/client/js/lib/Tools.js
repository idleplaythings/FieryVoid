window.Tools =
{
    canvasDrawingTool: null,

    getCanvasDrawingTool: function()
    {
        if (Tools.canvasDrawingTool === null)
        {
            Tools.canvasDrawingTool = new DrawingToCanvas(null);
        }

        return Tools.canvasDrawingTool;
    }
}