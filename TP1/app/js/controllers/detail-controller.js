angular.module("myContollers")
    .controller("detailController", ['$scope', '$routeParams', 'projectFactory', function ($scope, $routeParams, projectFactory) {

        $scope.project = projectFactory.getProjectById($routeParams.projectId);

    }])