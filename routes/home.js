/**
 * Created by SHAILESH-PC on 3/6/2016.
 */
var ejs = require("ejs");

function signin(req,res) {
    ejs.renderFile('./views/signin.ejs',function(err, result) {
        if (!err)
        {
            res.end(result);
        }
        else
        {
            res.end('An error occurred');
            console.log(err);
        }
    })
}
