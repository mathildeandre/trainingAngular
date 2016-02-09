angular.module("myContollers")
    .controller("newProjectController", ['$scope', '$routeParams', 'projectRestFactory', 'categoryProject',
        function ($scope, $routeParams, projectRestFactory, categoryProject) {


            /*$scope.project = {
                id: 2,
                nameProject: "new project",
                email: "mathilde@orange.fr",
                description: "ceci est un descriptino",
                montant: 1000
            };*/


            $scope.addProject = function () {
                projectRestFactory.createProject(angular.copy($scope.project)).then(
                    function(){
                    }
                )
                //projectFactory.addProject(angular.copy($scope.project));
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

            if ($routeParams.projectId) {
                projectRestFactory.getProjectById($routeParams.projectId).then(function(project){
                    $scope.project = project;
                })
            };

        }])