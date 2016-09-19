/**
 * Created by SHAILESH-PC on 3/4/2016.
 */
var express = require('express');
var app = express();
exports.add = function(mass,height)
{
    return mass + height;
}
exports.subtract = function(first_num,second_num)
{
    return first_num - second_num;
}

exports.multiply = function(first_num,second_num)
{
    return first_num * second_num;
}

exports.divide = function(first_num,second_num)
{   if (second_num == 0)
    {
        return "cannot divide by 0";

    }
    else
    {
    return first_num / second_num;
    }
}