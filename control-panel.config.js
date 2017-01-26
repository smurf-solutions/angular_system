/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'https://smurf-solutions.github.io/node_modules/',
      'spm:': 'https://smurf-solutions.github.io/angular_system/',
      'app:': './app/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core':             'npm:@angular/core/bundles/core.umd.js',
      '@angular/common':           'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler':         'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http':             'npm:@angular/http/bundles/http.umd.js',
      '@angular/router':           'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms':            'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/material':         'npm:@angular/material/bundles/material.umd.js',
      '@angular/flex-layout':      'npm:@angular/flex-layout/bundles/flex-layout.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

      //'@app/service':              'app:app.service.js',
      '@sys/service':              'spm:services/sys.service.js',
      '@sys/not-found':            'spm:not-found/not-found.js',
      '@sys/pipes':                'spm:pipes/index.js',
      '@sys/material':             'spm:material/index.js',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
	  /*src: {
        format: 'register',
        defaultExtension: 'js'
      },*/
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);