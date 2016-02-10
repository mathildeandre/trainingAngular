angular.module("myFilters", [])
    .filter('projectsProgression', function ($log) {
        return function (list, displayProgression) {
            //$log.debug('Filtre', input)

            if (!displayProgression) {
                return list;
            }
            if (displayProgression == "all") {
                return list;
            }

            var newList = [];

            angular.forEach(list, function (input) {
                if (displayProgression == "finished") {
                    //console.log(input.gifts >= input.goal);
                    if (input.gifts >= input.goal) {
                        newList.push(input);
                    }
                } else if (displayProgression == "toFinish") {
                    if (input.gifts < input.goal) {
                        newList.push(input);
                    }
                }
            });
            return newList;
        }
    })
    .filter('projectsCategory', function(){
        return function(list, selectCat){
            if(!selectCat){
                return list;
            }else{
                var newList = [];
                angular.forEach(list, function(input){
                    if(input.category == selectCat){
                        newList.push(input);
                    }
                });
                return newList;
            }
        }
    });