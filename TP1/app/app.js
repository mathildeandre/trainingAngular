angular
    .module("myApp", ['myContollers', 'myServices', 'ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
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
            .otherwise({
                redirectTo:'/projects'
            });


    }]);
