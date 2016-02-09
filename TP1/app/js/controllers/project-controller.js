angular.module("myContollers")
    .controller("projectsCtrl", ['$scope','$routeParams', 'projectFactory', function($scope, $routeParams, projectFactory){

        /*
        $scope.listProjects=[{id:3, nameProject:"Project 3", email:"pierre@mail.com", description:"Ceci est une description de mon projet", montant:700},
            {id:4, nameProject:"Project 4", email:"pierre@mail.com", description: "Ceci est une description de mon projet", montant:400}];
        */

        $scope.listProjects = projectFactory.getProjects();

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

        $scope.giveDonation = function(project){
            var montant = projectFactory.getProjectById(project.id).montant;
            if(project.donation < montant){
                projectFactory.getProjectById(project.id).montant = montant - project.donation;
            }
            project.donation = undefined;
        }
    }])
