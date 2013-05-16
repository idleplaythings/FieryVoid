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
    }
}