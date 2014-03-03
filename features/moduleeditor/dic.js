dic.register('model.ModuleEditor', function(dic) {
  return new model.ModuleEditor(
    dic.get('model.GameHtmlContainer'),
    dic.get('model.UiEventManager'),
    dic.get('model.EventDispatcher'),
    dic.get('model.IconFactory'),
    dic.get('model.GameScene'),
    dic.get('model.ReactiveModuleLayout'),
    dic.get('model.GameAnimationLoop'),
    dic.get('model.InputModeFactory'),
    dic.get('model.SelectedModuleLayout'),
    dic.get('moduleEditor.ReactiveModuleList')
  );
});

dic.register('model.ReactiveModuleLayout', function(dic) {
  return new model.ReactiveComponent(
    dic.get('model.EventDispatcher'),
    ModuleLayouts,
    "moduleeditor_selected_moduleLayout",
    'moduleLayoutChanged'
  )
});

dic.register('model.SelectedModuleLayout', function(dic) {
  return new ObjectContainer();
}, { shared: true} );