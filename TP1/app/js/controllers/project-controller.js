angular.module("myContollers")
    .controller("projectsCtrl", ['$scope', '$routeParams', 'projectRestFactory', 'categoryProject',
        function ($scope, $routeParams, projectRestFactory, categoryProject) {


            $scope.project3 = {
                id: 3,
                name: "Project 3",
                email: "pierre@mail.com",
                description: "Ceci est une description de mon projet",
                goal: 700
            };


            function loadProject() {
                projectRestFactory
                    .getProjects()
                    .then(function (projects) {
                        console.log(projects)
                        $scope.listProjects = projects;
                    }, function (error) {
                        alert(error);
                    });
            };


            $scope.reloadProject = loadProject;

            loadProject();

            $scope.loadProjects = function (value) {
                $scope.displayProgression = value;
            };

            $scope.categories = categoryProject;

            $scope.loadCategory = function(cat){
                $scope.selectedCategory = cat;
            }

            /*
             $scope.$on('created', function(){
             alert("new project created");
             });
             */

            /*
             if($routeParams){
             alert($routeParams.nameProject);
             $scope.listProjects.push({nameProject:$routeParams.nameProject});
             }
             */


        }])
