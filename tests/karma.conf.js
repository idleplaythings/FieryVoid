// Karma configuration
// Generated on Sat Oct 19 2013 23:20:03 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'tests/**/*Spec.js',
        'tests/**/*Mock.js',
        'tests/lib/*.js',
        'tests/mocks/jquery.min.js',
        'lib/model/model.js',
        'lib/math/Vector2.js',
        'lib/MathLib.js',
        'lib/CoordinateConverter.js',
        'model/ship/ShipDisplay.js',
        'model/ship/ShipDisplayGrid.js',
        'model/ship/module/ModuleLayout.js',
        'model/game/movement/Movement.js',
        'model/game/movement/MovementResolver.js',
        'model/game/movement/ThrusterResolver.js',
        'model/game/movement/ThrusterForMovement.js',
        'model/game/movement/ThrusterGroup.js',
        'model/game/movement/MovementRoute.js',
        'model/game/movement/MovementWaypoint.js',
        'model/game/UiFocusResolver.js',
        'features/timeline/model/Timeline.js',
        'client/lib/three.min.js',

        'features/lib/DIC/DIC.js',
        'features/lib/DIC/Factory.js',
        'features/lib/Extend/Extend.js',

        'features/icon/model/lib/Icon.js'
      
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
