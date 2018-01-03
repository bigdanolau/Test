angular.module("main", [])

.controller("mainController", function($scope,$http) {

$scope.canales = {};
$scope.vendedores = {};
$scope.proveedores = {};

  var config = {
         headers: {
           "Authorization":
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ5Y2ZlYzBkY2MyNmRkZTIwMThkYTI4ZjA0MzY5MmI5NjcwMGRlZGU5N2QxMGU3ZWJmZTM1ODljZGMyMzcxODdiOThkZThkZmZmNmQyZTQ3In0.eyJhdWQiOiIyIiwianRpIjoiNDljZmVjMGRjYzI2ZGRlMjAxOGRhMjhmMDQzNjkyYjk2NzAwZGVkZTk3ZDEwZTdlYmZlMzU4OWNkYzIzNzE4N2I5OGRlOGRmZmY2ZDJlNDciLCJpYXQiOjE1MTM0NDQ5MjYsIm5iZiI6MTUxMzQ0NDkyNiwiZXhwIjoxNTE2MDM2OTI2LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.hKxkKYBuk867nIGy9c92OTwMR1hsI5HN-11kBYEqK8IMOmdPaeKqvZbQlvUbwH3Eb_ya2zZAXSTLEV1oS1jkCmROeVeqNO3wxG2a1M5PoNw18ej4xYWB4Xf3D976vP7hRtJcYUi-WGKB4YhKpDjZ_smVLDBBQFGYyXbOL3Vljbec4YIduiPTmt0TK6CZD740miW7rwPap4HQyAXaI2_qaE1iYXiM48E0-5z9AeX48ZgCRdBGK2ZkbBK0sJGvsZALwEfC7Nt01Ji1kA_VC_XzDwx_hTPNQRaEherqQdaPNsEthDiT5coJz63_zre3cbyZ18-MZ6nvoARCnbUcs5gUnvYipEfCvAhc9iQ8894JandaRxUNUh3l5O3bMp7NY1dH-B816MDLmXjmxVTMwPTQj1q8kJX4cqIKu6NEcFlJfxLamdnXgYffKBXiU_ws7GC3y0zXcrUgGxhCnSZx0p10iVjLv2FNoC0ZxRz2rnfuns6WmxdmFgRPhxc9Cio9WzRM5jDt3FDJihchAOENcebqBxwRdFlxxmchfCcuR7QHBRVI_ogHne74V8lKO9g0S_Jjai2d2Ca75ozDmWp_nfYfeC-lGxBME64-vgibVVq4hUZh9MLFlUpeYS962ExlhD7l3qP4n1ka1ftmGb2U6uUYSx70IhBba00sXUP8RPQnhpY"
         }
       };
       $http.get("http://cloud.dismelltda.com/api/public/api/reportes/consolidadocuotaproveedor?sugerido=19",config).then(function(success){
        console.log(success);
        $scope.canales = success.data.canales;
        $scope.vendedores = success.data.vendedores ;
        $scope.proveedores =  success.data.proveedores;
      },(error)=>{

      });
})
