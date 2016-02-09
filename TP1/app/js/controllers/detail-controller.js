angular.module("myContollers")
    .controller("detailController", ['$scope', '$routeParams', 'projectRestFactory', function ($scope, $routeParams, projectRestFactory) {

        if ($routeParams) {
            projectRestFactory.getProjectById($routeParams.projectId).then(
                function (project) {
                    console.log(project);
                    $scope.project = project;
                }
            )
        }
    }])