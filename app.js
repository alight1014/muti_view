'use strict';

var MyApp = angular.module('MyApp', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl'
                })
                .when('/article/:article_id', {
                    templateUrl: 'views/article.html',
                    controller: 'ArticleCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);


MyApp.controller('MyCtrl', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        $rootScope.$on("$routeChangeStart", function(event, next, current) {

             event.preventDefault();
            //if()
        });
    }
]);