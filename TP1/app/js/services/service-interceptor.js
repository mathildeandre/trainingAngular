angular.module("myServices")
    .service('$httpErrorInterceptor', function ($q) {
        return {
            responseError: function (response) {
                if (response.status == 401) {
                    alert("error 401 : "+response);
                }
                if (response.status == 403) {
                    alert("error 403 : "+response);
                }
                if (response.status == 419) {
                    alert("error 419 : "+response);
                }
                if (response.status == 500) {
                    alert("error 500 : "+response);
                }

                return $q.reject(response);
            }
        }
    })


