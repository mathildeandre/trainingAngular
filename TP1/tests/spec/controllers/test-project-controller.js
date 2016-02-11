/**
 * TEST SIMPLE PROJECT CONTROLLER
 */
describe('projectsCtrl', function(){
    beforeEach(module('myContollers'));
    beforeEach(module('myServices'));

    var $controller;
    var $projectRestFactory;
    var $categoryProject;
    var $httpBackend;

    // add angular equality to jasmine quality tester
    beforeEach(function(){
        jasmine.addCustomEqualityTester(function(first, second){
            return angular.equals(first, second);
        })
    })

    beforeEach(inject(function(_$controller_, _$httpBackend_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;

        $httpBackend = _$httpBackend_;
        $httpBackend
            .when("GET", "/api/projects")// equivaut a .expectGET('/api/projects')
            .respond([
                {
                    id: 3,
                    name: "Project 3",
                    email: "pierre@mail.com",
                    description: "Ceci est une description de mon projet",
                    goal: 700
                }
            ]);
        // scope = $rootScope.$new();
    }));

    it('check list projects', function(){
        var $scope = {};
        var $routeParams = {};
        var ProjectCtrl = $controller('projectsCtrl', { $scope: $scope, $routeParams: $routeParams});
        $scope.reloadProject(); // ne renvoit rien
        $httpBackend.flush(); // permet le retour de l'appel au service

        // test que la liste contient le projet
        expect($scope.listProjects).toContain({ id: 3,
            name: "Project 3",
            email: "pierre@mail.com",
            description: "Ceci est une description de mon projet",
            goal: 700});
    })

});

/**
 * TEST BIDON
 */
describe('test', function(){
    it('test always works', function(){
        expect(1).toEqual(1);
    })
});

/**
 * TEST FILTER Project Progression
 */
describe('projectsProgression', function(){
    beforeEach(module('myFilters'));

    var $filter;

    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));

    it('returns all projects when given all', function(){
        var tab = [
            {
                id: 3,
                name: "Project 3",
                email: "pierre@mail.com",
                description: "Ceci est une description de mon projet",
                goal: 700
            }
        ]
        var filter = $filter('projectsProgression');
        expect(filter(tab, 'all')).toEqual(tab);
    })

});

/**
 * TEST DIRECTIVE
 */
describe('cardDirective', function(){
    beforeEach(module('myDirectives'));
    beforeEach(module('myServices'));
    beforeEach(module('templates'));

    var $compile;
    var $rootScope;
    var $httpBackend;

    beforeEach(inject(function(_$compile_, _$rootScope_,$templateCache){
        $compile = _$compile_;
        $rootScope = _$rootScope_.$new();

        $templateCache.put('partials/card.html', $templateCache.get('app/partials/card.html')); //use of ng-html2js
    }));

    it('Replace element with the appropriate content', inject(function($compile){

        // $compile the template, and pass it in the $rootScope
        // this will find your directive and compile everything
        var link = $compile("<div card-directive project=\"\" on-update=\"\"></div>")
        var template = link($rootScope); //$rootScope est le contexte d'execution

        $rootScope.$digest();
        var templateAsHtml = template.html();
        console.log(template.html());

        //console.log('Test')
        //console.log(templateAsHtml);
        expect(templateAsHtml).toContain("% Complete");
    }))

});