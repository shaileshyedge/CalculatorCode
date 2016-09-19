/**
 * Created by SHAILESH-PC on 3/4/2016.
 */
var express = require('express');
var app = express();
exports.add = function(mass,height)
{    var val = (mass * 703)/(height*144*height)
    if (val <= 18.5 )
    {text = "You are underweight.Your BMI value is "};
    if (val > 18.5 && val < 24.9)
    {text = "You are Normal weight. Your BMI index is "};
    if (val >= 24.9)
    {text = "You are over weight. Your BMI index is "};
    if (val > 30)
    {text = "You are obese. Your BMI index is "};
    return (text + round(val,2));
}
