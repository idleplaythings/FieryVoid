// Karma configuration
// Generated on Wed May 22 2013 18:19:32 GMT+0300 (EEST)


// base path, that will be used to resolve files and exclude
basePath = '..';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
    'tests/**/*Spec.js',
    'tests/**/*Mock.js',
    'tests/mocks/jquery.min.js',
    'lib/model/model.js',
    'lib/CoordinateConverter.js',
    'model/ship/ShipDisplay.js',
    'model/ship/ShipDisplayGrid.js',
    'model/ship/tools/ShipMass.js',
    'model/ship/module/ModuleLayout.js'
];


// list of files to exclude
exclude = [
  
];


// tests results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
