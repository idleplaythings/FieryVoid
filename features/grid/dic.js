dic.register(
    'model.TilePlacingModule',
    function(dic) {
        return new model.TilePlacingModule(
            {},
            dic.get('model.ShipDesignEditorService')
        );
    }
);