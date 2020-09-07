import express from 'express';
import bodyParser from 'body-parser';
import usuariosRoutes from './Controladores/ControladorUsuarios';
import categoriaRoutes from './Controladores/ControladorCategorias';
import postRoutes from './Controladores/ControladorPosts';
require('./BaseDatos');

const PORT = 8080;
const app = express();
app.use(bodyParser.json());
app.use('/usuarios', usuariosRoutes);
app.use('/categoria', categoriaRoutes);
app.use('/post', postRoutes);


app.get('/', function (req, res) {

  res.json({ mensaje: 'Bienvenido al servidor de Neptuno' });
});

app.listen(PORT);
console.log(`Express started on port ${PORT}`);


