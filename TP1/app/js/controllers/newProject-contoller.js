angular.module("myContollers")
    .controller("newProjectController", ['$scope', '$routeParams', 'projectFactory', 'categoryProject',
        function ($scope, $routeParams, projectFactory, categoryProject) {


            $scope.project = {
                id: 2,
                nameProject: "new project",
                email: "mathilde@orange.fr",
                description: "ceci est un descriptino",
                montant: 1000
            };


            $scope.addProject = function () {
                projectFactory.addProject(angular.copy($scope.project));
                //$scope.listProjects.push(angular.copy($scope.project));
                //$scope.$emit('created');
            };

            $scope.categories=categoryProject;

            $scope.persons =
                [
                    {name: 'Marie', age: 30 },
                    { name: 'Philippe', age: 27 },
                    { name: 'JP', age: 50 },
                    { name: 'Fabi', age: 15 },
                    { name: 'Mathou', age: 27 },
                    { name: 'Chachou', age: 30 }
                ];




            if ($routeParams) {
                $scope.project = projectFactory.getProjectById($routeParams.projectId);
            };

        }])