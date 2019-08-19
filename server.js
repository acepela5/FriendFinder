var express = require("express");
var app = express();
var path = require('path');

var PORT = process.env.PORT || 8080;

// app.use(express.static(path.join(__dirname, 'public/assets')));
app.use(express.static("app/public"));


app.use(express.urlencoded({extended: true}));
app.use(express.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("Listening on PORT: ", PORT);
});