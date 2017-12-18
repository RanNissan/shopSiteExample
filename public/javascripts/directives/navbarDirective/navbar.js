app.directive("navbarDirective", function () {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
        scope: {
            data: '='
        },
        templateUrl: '/Views/directives/navbarDirective/navbarView.html',
        link: function(scope, elem, attr) {
            scope.changeLocation = function (url) {
                alert(url);
                window.location = url;
            };
        }
    }
});
