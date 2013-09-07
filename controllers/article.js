'use strict';

MyApp.controller('ArticleCtrl', ['$scope', '$routeParams', '$rootScope',
    function($scope, $routeParams, $rootScope) {
        console.log(455);
        $scope.article = {
            id: $routeParams.article_id,
            title: 'title ' + $routeParams.article_id,
            detail: 'hello world ' + $routeParams.article_id
        };

        $scope.showMsg = function(msg) {
            alert(msg);
        };
    }
]);