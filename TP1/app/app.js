angular
    .module("myApp", ['myContollers', 'myServices','myDirectives', 'myFilters','ngRoute'])
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider.when('/projects/:projectName?', {
            templateUrl: 'partials/list.html',
            controller: 'projectsCtrl'
        })
            .when('/newProject/:projectId?', {
                templateUrl: 'partials/form.html',
                controller: 'newProjectController'
            })
            .when('/detail/:projectId?', {
                templateUrl: 'partials/detail.html',
                controller: 'detailController'
            })
            .when('/welcome', {
                templateUrl: 'partials/main.html',
                controller: 'projectsCtrl'
            })
            .otherwise({
                redirectTo:'/welcome'
            });

        $httpProvider.interceptors.push('$httpErrorInterceptor');
    }]);
