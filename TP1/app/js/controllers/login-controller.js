angular.module("myContollers")
    .controller('loginController', ['$scope', '$rootScope','loginFactory', '$location', function ($scope,$rootScope, loginFactory, $location) {


        $scope.login = function(){
            loginFactory.login($scope.userLogin, $scope.password).then(function(user){
                console.log("User : "+user.email+" is connected")
                $rootScope.currentUser = user;
                $location.path("/projects");
            }, function(err) {
                $scope.errors = "Unable to login";
            })
        }
    }])