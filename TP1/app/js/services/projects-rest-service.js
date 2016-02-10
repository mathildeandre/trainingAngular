angular.module("myServices")
    .factory("projectRestFactory", function ($http, $q) {

        return {
            getProjects: getProjects,
            getProjectById: getProjectById,
            updateProject: updateProject,
            createProject: createProject,
            deleteProject: deleteProject
        };

        function getProjects() {
            return $http({
                method: 'GET',
                url: '/api/projects'
            })
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    }
                    return $q.reject(response); //si HTTP pas de gestion d'erreur dans la version HTTP d'angular 1.3
                })
        };

        function getProjectById(idProject) {
            return $http({
                method: 'GET',
                url: '/api/projects/' + idProject
            })
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    }
                    return $q.reject(response); //si HTTP pas de gestion d'erreur dans la version HTTP d'angular 1.3
                })
        };

        function updateProject(project) {
            return $http({
                method: 'PUT',
                url: '/api/projects/' + project._id,
                data: project
            })
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    }
                    return $q.reject(response);
                })
        };

        function createProject(project) {
            return $http({
                method: 'POST',
                url: '/api/projects/',
                data: project
            })
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    }
                    return $q.reject(response);
                })
        };

        function deleteProject(project) {
            return $http({
                method: 'DELETE',
                url: '/api/projects/' + project._id,
            })
                .then(function (response) {
                    if (response.status == 200) {
                        return response.data;
                    }
                    return $q.reject(response);
                })
        }



    });
