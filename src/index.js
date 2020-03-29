var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send(<h1>vegge.com.br under construction</h1>);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Umbler listening on port %s", port);
});
