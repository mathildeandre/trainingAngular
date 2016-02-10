angular.module("myDirectives")
    .controller("directiveController", ['$scope', 'projectRestFactory', function($scope, projectRestFactory){

        $scope.giveDonation = function (project) {
            projectRestFactory.getProjectById(project._id).then(function (projectReturned) {
                    if (project.donation > 0) {
                        console.log('Project', project);

                        projectReturned.gifts = projectReturned.gifts + project.donation;
                        projectRestFactory.updateProject(projectReturned);
                        project.gifts = project.gifts + project.donation;
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