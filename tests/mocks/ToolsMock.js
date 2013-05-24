this.Tools =
{
    canvasDrawingTool: null,

    getCanvasDrawingTool: function()
    {
        if (Tools.canvasDrawingTool === null)
        {
            Tools.canvasDrawingTool = {
                drawBox: function(){},
                drawHalfBoxWithSide: function(){},
                drawHalfBoxWithTop: function(){},
                drawHalfBox: function(){}
            };
        }

        return Tools.canvasDrawingTool;
    }
};
