angular.module("myServices")
    .factory("loginFactory", function ($http, $q) {

        function login(user, pwd) {
            return $http({
                method: 'POST',
                url: '/api/users/',
                data: {email:user, password:pwd}
            })
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    }
                    return $q.reject(response);
                })
        }

        return {
            login: login
        };
    });