/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('myApp',[]);
app.controller('placeCtrl', function ($scope, $http, $sce) {
    $http.get("places.json").then(function (response) {
        $scope.myData = response.data.places;

        for (var i = 0; i < $scope.myData.length; i++) {
            var reviews = $scope.myData[i].ratings;
      
            var rating = 0.0;
            for (var j = 0; j < 4; j++)
            {
                rating = Number(reviews[j].rating) + rating;
            }
            rating = rating / 4;
            reviews[4].rating = rating;

        }
		
        $scope.appendStar = function (val) {
            var i, intVal, count = 0, certificationStar = "";
            intVal = Math.floor(val);
            for (i = 0; i < intVal; i++) {
                certificationStar += '<i class="fa fa-star" style="font-size:30px;color:blue;opacity:0.7"></i>';
            }
            if (val > intVal) {
                certificationStar += '<i class="fa fa-star-half-empty" style="font-size:30px;color:blue;opacity:0.5"></i>';
                count = (5 - intVal) - 1;
                for (i = 0; i < count; i++) {
                    certificationStar += '<i class="fa fa-star-o" style="font-size:30px;color:blue;opacity:0.7"></i>';
                }
            } else {
                count = 5 - intVal;
                for (i = 0; i < count; i++) {
                    certificationStar += '<i class="fa fa-star-o" style="font-size:30px;color:blue"></i>';
                }
            }
            return $sce.trustAsHtml(certificationStar);
        };
    });
});