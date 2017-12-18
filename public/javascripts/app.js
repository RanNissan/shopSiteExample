var app = angular.module("myApp", []);

app.controller("mainController", ['$scope', function ($scope) {
    $scope.dataNavbar = {imgUrl:"../../Images/diamondnavbar.png",
                      navText: "FREE SHIPPING ON ALL ORDERS OVER $40!",
                      buttons: [{name: "LOGIN", url: "/login"},
                                {name: "REGISTER", url: "/register"}]};
}]);