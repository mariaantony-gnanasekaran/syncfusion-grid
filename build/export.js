// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
  'list': [
    'index.html',
    'config.js',
    'favicon.ico',
    'LICENSE',
    'jspm_packages/system.js',
    'jspm_packages/system-polyfills.js',
    'jspm_packages/system-csp-production.js',
    'jspm_packages/npm/syncfusion-javascript@15.2.41/**/**',
    'jspm_packages/npm/jquery@3.2.1/**/**',
    'jspm_packages/npm/jsrender@0.9.84/**/**',
    'jspm_packages/npm/jquery-validation@1.16.0/**/**',
    'jspm_packages/npm/jquery@3.2.1.js',
    'jspm_packages/npm/jsrender@0.9.84.js',
    'jspm_packages/npm/jquery-validation@1.16.0.js',
    'jspm_packages/github/systemjs/plugin-css@0.1.33.js',
    'jspm_packages/github/systemjs/plugin-css@0.1.33/**/**',
    'styles/styles.css'
  ],
  // this section lists any jspm packages that have
  // unbundled resources that need to be exported.
  // these files are in versioned folders and thus
  // must be 'normalized' by jspm to get the proper
  // path.
  'normalize': [
    [
      // include font-awesome.css and its fonts files
      'font-awesome', [
        '/css/font-awesome.min.css',
        '/fonts/*'
      ]
    ], [
      // include bootstrap's font files
      'bootstrap', [
        '/fonts/*'
      ]
    ], [
      'bluebird', [
        '/js/browser/bluebird.min.js'
      ]
    ]
  ]
};
