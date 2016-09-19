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
            url: "http://ec2-52-24-74-237.us-west-2.compute.amazonaws.com:3000/CalcServerCntr/add"
        }).then (function success(output)
        { $scope.result = output.data;
        },function err(err)
        {
        })
}
    $scope.subtractnum = function ()
    {
        $http ({
            method: "POST",
            data: {
                "first_num": $scope.first_num,
                "second_num": $scope.second_num
            },
            url: "http://localhost:3000/CalcServerCntr/subtract"
        }).then (function success(output)
        { $scope.result = output.data;
        },function err(err)
        {
        })
    }

    $scope.multiplynum = function ()
    {
        $http ({
            method: "POST",
            data: {
                "first_num": $scope.first_num,
                "second_num": $scope.second_num
            },
            url: "http://localhost:3000/CalcServerCntr/multiply"
        }).then (function success(output)
        { $scope.result = output.data;
        },function err(err)
        {
        })
    }

    $scope.dividenum = function ()
    {
        $http ({
            method: "POST",
            data: {
                "mass": $scope.mass,
                "height": $scope.height
            },
            url: "http://localhost:3000/CalcServerCntr/divide"
        }).then (function success(output)
        { $scope.result = output.data;
        },function err(err)
        {
        })
    }
});
