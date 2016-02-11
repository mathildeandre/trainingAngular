angular
    .module("myApp", [
        'myContollers',
        'myServices',
        'myDirectives',
        'myFilters',
        'ngRoute'
    ])
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider.when('/projects/:projectName?', {
            templateUrl: '../partials/list.html',
            controller: 'projectsCtrl',
            access: {isFree: false}
        })
            .when('/newProject/:projectId?', {
                templateUrl: '../partials/form.html',
                controller: 'newProjectController',
                access: {isFree: false}
            })
            .when('/detail/:projectId?', {
                templateUrl: '../partials/detail.html',
                controller: 'detailController',
                access: {isFree: false}
            })
            .when('/welcome', {
                templateUrl: '../partials/main.html',
                controller: 'projectsCtrl',
                access: {isFree: true}
            })
            .when('/login', {
                templateUrl: '../partials/login.html',
                controller: 'loginController',
                access: {isFree: true}
            })
            .otherwise({
                redirectTo:'/welcome'
            });

        $httpProvider.interceptors.push('$httpErrorInterceptor');
    }])

    .run(function ($rootScope, $location) {

        // Redirect to login if route requires auth and you're not logged in
        $rootScope.$on('$routeChangeStart', function (event, next) {

            if (next && !next.access.isFree && !$rootScope.currentUser) {
                $location.path('/login');
            }
        });
    });
;


