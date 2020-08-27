import express from 'express';
const app = express();
const PORT = 8080;

app.get('/', function (req, res) {

    res.json({ mensaje: 'Bienvenido al servidor de Neptuno' });
  });
  
  app.listen(PORT);
  
  console.log(`Express fue iniciado en el puerto ${PORT}`);