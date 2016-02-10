angular.module("myDirectives")
    .directive('cardDirective', function(){
        return{
            restrict: 'EA', //on element and attribute
            scope:{
                project : '=project',
                onUpdate: '='
            },
            templateUrl: 'partials/card.html',
            controller: 'directiveController'

        }
    })