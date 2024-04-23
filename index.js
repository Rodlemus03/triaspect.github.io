
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const cors = require('cors'); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const transporter = nodemailer.createTransport({

  service: "gmail",
  auth: {
    user: "triaspectgt@gmail.com",
    pass: "triaspectgt2024@",
  },
});

app.post("/procesar-email", (req, res) => {
  const { email, mensaje } = req.body;


  const mailOptions = {
    from: email,
    to: "triaspectgt@gmail.com",
    subject: "mensaje desde el form",
    text: mensaje
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error al enviar el correo:", error);
    } else {
      console.log("Correo enviado:", info.response);
    }
  });

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});