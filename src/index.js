var express = require("express");
var nodemailer = require("nodemailer");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>vegge.com.br under construction ..</h1>");
});

// app.get("/send", (req, res) => {
//   nodemailer.createTransport({
//     host: "smtp.umbler.com",
//     port: 587,
//     auth: {
//       user,
//       pass
//     }
//   });
// });

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Umbler listening on port %s", port);
});
