angular.module("myContollers")
    .controller('loginController', ['$scope', 'loginFactory', function ($scope, loginFactory) {


        $scope.login = function(){
            loginFactory.login($scope.userLogin, $scope.password).then(function(user){
                //alert("user : "+user+" is connected");
                console.log(user.role);
                window.user = user;
                console.log(window.user);

            })
        }

    }])