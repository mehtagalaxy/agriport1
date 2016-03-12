var express = require("express");
var app = express();

var routes=require('./routes/routes.js');

app.set("view engine","ejs");

app.use(express.static(__dirname + '/public'));

app.get("/",routes.home);
app.get("/home",routes.home);
app.get("/about",routes.about);
app.get("/contact",routes.contact);
app.get("/news",routes.news);
app.get("/career",routes.career);
app.get("/login",routes.login);
app.get("/signup",routes.signup);

//app.get('/:city',routes.city);

var port = process.env.PORT || 8080;

var server=app.listen(port,function(){
	console.log("Catch the action at http://localhost:"+port);
});
