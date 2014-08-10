dic.register('model.inputAction.LightBlueArrowCursor', function(dic) {
    return new model.inputAction.CustomCursor(
        dic.get('model.GameHtmlContainer'),
        'selectCursor'
    );
});

dic.register('model.inputAction.RedXCursor', function(dic) {
    return new model.inputAction.CustomCursor(
        dic.get('model.GameHtmlContainer'),
        'removeCursor'
    );
});

dic.register('model.inputAction.TargetCursor', function(dic) {
    return new model.inputAction.CustomCursor(
        dic.get('model.GameHtmlContainer'),
        'weaponCursor'
    );
});