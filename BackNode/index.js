const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors')

const whiteList = ['http://localhost:3000','http://localhost:3001','http://localhost:3001/enviar-correo'];


app.use(cors());
// Configurar el transporte de correo
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'agustin.giudice2@gmail.com', // Reemplaza con tu dirección de correo electrónico
    pass: 'xbcvzfhkgjmcmsqp', // Reemplaza con tu contraseña de correo electrónico
  },
});

app.use(express.json());

// Ruta para enviar el correo electrónico
app.post('/enviar-correo', (req, res) => {
  const { nombre, correo, asunto, mensaje } = req.body;

  const mailOptions = {
    from: 'agustin.giudice2@gmail.com', 
    to: 'agustin.giudice2@gmail.com',
    subject: asunto,
    text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar el correo electrónico:', error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado correctamente:', info.response);
      res.send('Correo electrónico enviado correctamente');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
