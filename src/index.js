var express = require("express");
var nodemailer = require("nodemailer");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>vegge.com.br</h1>");
});

app.get("/app", (req, res) => {
  res.send({ ok: "true" });
});

const user = "contato@vegge.com.br";
const pass = "p@ssMyWORD";

app.get("/send", (req, res) => {
  const transport = nodemailer.createTransport({
    host: "smtp.umbler.com",
    port: 587,
    auth: {
      user,
      pass
    }
  });

  transport
    .sendMail({
      from: user,
      to: "cliente@email.com",
      replyTo: "contato@vegge.com.br",
      subject: "Novo pedido",
      text: "1 abacate, 2 bananas, 1 alface crespa."
    })
    .then(data => res.send(data))
    .catch(err => {
      res.send(err);
    });
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Umbler listening on port %s", port);
});
