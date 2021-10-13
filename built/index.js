var express = require("express");
var app = express();
var port = 3000;
app.get("/user", function (req, res) {
    // res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.send("Hello World! user wu");
});
app.get("/post", function (req, res) {
    res.send("hello post");
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
