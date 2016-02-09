angular.module("myContollers")
    .controller("projectsCtrl", ['$scope', '$routeParams', 'projectRestFactory', function ($scope, $routeParams, projectRestFactory) {

        /*
         $scope.listProjects=[{id:3, nameProject:"Project 3", email:"pierre@mail.com", description:"Ceci est une description de mon projet", montant:700},
         {id:4, nameProject:"Project 4", email:"pierre@mail.com", description: "Ceci est une description de mon projet", montant:400}];
         */


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


        loadProject();
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

        $scope.giveDonation = function (project) {

            projectRestFactory.getProjectById(project._id).then(function (projectReturned) {
                    var montant = projectReturned.goal;
                    if (project.donation < montant) {
                        projectReturned.goal = montant - project.donation;
                        projectRestFactory.updateProject(projectReturned);
                        loadProject();
                    }
                    project.donation = undefined;
                }
            );
        }

        $scope.deleteProject = function(project){
            projectRestFactory.deleteProject(project).then(function(){
                loadProject();
            })
        }
    }])
