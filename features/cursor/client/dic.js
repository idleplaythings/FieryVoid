dic.register('model.inputAction.LightBlueArrowCursor', function(dic) {
    return new model.inputAction.LightBlueArrowCursor(
        dic.get('model.GameHtmlContainer')
    );
});

dic.register('model.inputAction.RedXCursor', function(dic) {
    return new model.inputAction.RedXCursor(
        dic.get('model.GameHtmlContainer')
    );
});