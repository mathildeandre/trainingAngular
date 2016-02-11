module.exports = function(config){
    config.set({

        basePath : '../',

        preprocessors: {
            'app/partials/**/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('foo')
            moduleName: 'templates'
        },

        files : [
            'app/lib/angular.js',
            'app/lib/angular-mocks.js',
            'app/lib/angular-route.js',
            'app/lib/angular-resource.js',
           // 'app/js/*.js',
            'app/js/controllers/controllers.js',
            'app/js/controllers/project-controller.js',

            'app/js/services/service.js',
            'app/js/services/projects-rest-service.js',
            'app/js/services/projects-service.js',

            'app/js/directives/directives.js',
            'app/js/directives/directive-card.js',
            'app/js/directives/directive-card-controller.js',

            'app/js/filters/filters.js',
            'tests/spec/**/*.js',
            'app/partials/**/*.html'
        ],


        autoWatch : false,

        frameworks: ['jasmine'],

        reporters: ['mocha'],

        browsers : ['Firefox'], //,'Firefox','Safari'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ng-html2js-preprocessor',
            'karma-jasmine',
            'karma-mocha-reporter'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};