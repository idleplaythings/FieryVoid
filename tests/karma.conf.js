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
        'features/shipmodule/model/ModuleLayout.js',
        'features/shipstatus/model/lib/ShipStatusManager.js',
        'features/movement/model/Movement.js',
        'features/movement/model/MovementResolver.js',
        'features/movement/model/ThrusterResolver.js',
        'features/movement/model/ThrusterForMovement.js',
        'features/movement/model/ThrusterGroup.js',
        'features/movement/model/MovementRoute.js',
        'features/movement/model/MovementWaypoint.js',
        'features/game/client/ui/UiFocusResolver.js',

        'features/hexagon/model/coordinate/Cube.js',
        'features/hexagon/model/coordinate/Axial.js',
        'features/hexagon/model/coordinate/Offset.js',

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
    browsers: ['Firefox'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
