// var express = require("express");
// var app = express();

// app.get("/", function (req, res) {
//     res.send("<h1>Hello there, world</h1>");
// });

// app.get("/name/:name", function (req, res) {
//     var name = req.params.name;
//     res.redirect('http://google.com/search?q=' + name  )
// });

// app.get("/{*any}", function(req, res) {
//     res.status(404).send("<h1> 404 - Seite nicht gefunden </h1>")
// });

// app.listen(3000, function () {
//     console.log("Server running at http://localhost:3000");
// });


var express = require("express");
var app = express();

app.use(express.static("PR2"));
app.get("/", function(req, res){
res.redirect("index.html");
});

app.listen(3000, function(){
console.log("Example is running on port 3000");
});