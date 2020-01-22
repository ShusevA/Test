var express = require('express');

var app = express();

app.engine("ejs", require("ejs-locals"));
app.set("views", "./templates");
app.set("view engine", 'ejs');
app.use('/public', express.static('public'));

app.listen(1333, function(){
   console.log("Сервер запущен");
});

app.get("/", function(req, res){
   res.render("shop");
});

app.get("/cart", function(req, res){
   res.render("cart");
})
 

app.get("/shipping", function(req, res){
   res.render("shipping");
});
