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
    dic.get('moduleEditor.ReactiveModuleList'),
    dic.get('model.ModuleImageChooser'),
    dic.get('model.inputAction.ModuleEditorClick')
  );
});

dic.register('model.ReactiveModuleLayout', function(dic) {
  return new model.ReactiveComponent(
    dic.get('model.EventDispatcher'),
    ModuleLayouts,
    "moduleeditor_selected_moduleLayout",
    'moduleLayoutChanged',
    dic.get('model.ModuleFactory')
  )
});

dic.register('model.SelectedModuleLayout', function(dic) {
  return new ObjectContainer();
}, { shared: true} );

dic.register('model.ModuleImageChooser', function(dic) {
  return new model.ModuleImageChooser(
    dic.get('model.EventDispatcher'),
    dic.get('model.ModuleImageStorage'),
    dic.get('model.ModuleEditorService')
  );
});

dic.register('model.ModuleEditorService', function(dic) {
  return new model.ModuleEditorService();
}, { shared: true} );

dic.register(
    'model.InputModeModuleEditor',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [
                dic.get('model.inputAction.ModuleEditorClick')
            ]
        );  
    }, {
        tags: [ 'inputMode' ]
    }
);

dic.register('model.inputAction.ModuleEditorClick', function(dic) {
    return new model.inputAction.ModuleEditorClick(
        dic.get('model.SelectedModuleLayout'),
        dic.get('model.ModuleEditorService')
    );
}, {shared: true});