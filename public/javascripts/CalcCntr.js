/**
 * Created by SHAILESH-PC on 3/3/2016.
 */
var app = angular.module('Calculator', []);
app.controller('CalcControl', function($scope,$http)
{
    $scope.calcbmi = function ()
    {
        $http ({
            method: "POST",
            data: {
                "mass": $scope.mass,
                "height": $scope.height
            },
            url: "ec2-54-70-81-54.us-west-2.compute.amazonaws.com:3000/CalcServerCntr/add"
        }).then (function success(output)
        { $scope.result = output.data;
        },function err(err)
        {
        })
}

});
