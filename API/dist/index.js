"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _ControladorUsuarios = _interopRequireDefault(require("./Controladores/ControladorUsuarios"));

var _ControladorCategorias = _interopRequireDefault(require("./Controladores/ControladorCategorias"));

var _ControladorPosts = _interopRequireDefault(require("./Controladores/ControladorPosts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./BaseDatos');

var PORT = 8080;
var app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use('/usuarios', _ControladorUsuarios.default);
app.use('/categoria', _ControladorCategorias.default);
app.use('/post', _ControladorPosts.default);
app.get('/', function (req, res) {
  res.json({
    mensaje: 'Bienvenido al servidor de Neptuno'
  });
});
app.listen(PORT);
console.log("Express started on port ".concat(PORT));