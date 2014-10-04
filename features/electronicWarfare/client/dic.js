dic.register('model.inputAction.ShowEWMenu', function(dic) {
  return new model.inputAction.ShowEWMenu(
    dic.get('model.SelectedShip'),
    dic.get('model.ShipService'),
    dic.get('model.GameState'),
    dic.get('model.EventDispatcher'),
    dic.get('model.ew.EWRadialMenu'),
    dic.get('model.PositionService')
  );
});

dic.register('model.ew.EWRadialMenu', function(dic) {
  return new model.ew.EWRadialMenu(
    dic.get('model.GameHtmlContainer'),
    'ewRadialMenu',
    new model.DrawingToCanvas(MathLib),
    dic.get('model.CoordinateConverterViewPort'),
    dic.get('model.EventDispatcher'),
    dic.get('model.ew.EWService'),
    dic.get('model.GridService')
  );
});