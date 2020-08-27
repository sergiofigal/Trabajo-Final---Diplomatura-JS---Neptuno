"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = 8080;
app.get('/', function (req, res) {
  res.json({
    mensaje: 'Bienvenido al servidor de Neptuno'
  });
});
app.listen(PORT);
console.log("Express started on port ".concat(PORT));