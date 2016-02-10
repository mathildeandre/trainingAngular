angular.module("myDirectives")
    .controller("directiveController", ['$scope', 'projectRestFactory', function($scope, projectRestFactory){

        $scope.giveDonation = function (project) {
            projectRestFactory.getProjectById(project._id).then(function (projectReturned) {
                    var montant = projectReturned.goal;
                    console.log('Montant', montant);
                    if (project.donation < montant) {
                        console.log('Project', project);
                        projectReturned.goal = montant - project.donation;
                        projectRestFactory.updateProject(projectReturned);
                        project.goal = montant - project.donation;
                    }
                    project.donation = undefined;
                }
            );
        };

        $scope.deleteProject = function(project){
            projectRestFactory.deleteProject(project).then(function(){
                $scope.onUpdate();
            });
        }
    }])