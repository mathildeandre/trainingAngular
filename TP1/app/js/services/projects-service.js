angular.module("myServices")
    .factory("projectFactory", function(){

        var projects = [];

        initializeProjects();

        //private
        function initializeProjects(){
            projects.push({id:3,nameProject:"Project 3",category:"web", email:"pierre@mail.com", description:"Ceci est une description de mon projet", montant:700});
            projects.push({id:4, nameProject:"Project 4", category:"web", email:"pierre@mail.com", description: "Ceci est une description de mon projet", montant:400});
        }

        function getProjects(){
            return projects;
        }

        function getProjectById(idProject){
            for(var i=0; i<projects.length; i++){
                if(projects[i].id == idProject){
                    return projects[i];
                }
            }
            return null;
        }

        function addProject(project){
            if(getProjectById(project.id)){
                editProject(project);
            }else{
                projects.push(project);
            }
        }

        function editProject(project){
            var updateProject = getProjectById(project.id);
            updateProject.nameProject = project.nameProject;
            updateProject.email = project.email;
            updateProject.description = project.description;
            updateProject.montant = project.montant;
        }


        return{
            //Publics
            getProjects: getProjects,
            getProjectById: getProjectById,
            addProject: addProject
        }


    })

    .constant('categoryProject', {
        web: "Web",
        games: "Games",
        design: "Design",
        service: "Web et techno"
    });

