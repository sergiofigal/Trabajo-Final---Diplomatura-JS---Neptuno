"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Usuario = _interopRequireDefault(require("../Clases/Usuario"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express.default.Router();

router.post('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var usuario = new _Usuario.default(req.body);
    usuario.fechaRegistro = new Date();
    yield usuario.save();
    res.json(usuario);
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.put('/:_id', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    console.log("ACTUALIZAR UN USUARIO");
    yield _Usuario.default.findByIdAndUpdate(req.params, req.body);
    res.json({
      mensaje: 'Usuario actualizado'
    });
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.get('/', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    console.log('MOSTRAR USUARIOS');
    res.json(yield _Usuario.default.find());
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
router.get('/:_id', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    console.log('MOSTRAR UN USUARIO');
    res.json(yield _Usuario.default.findById(req.params));
  });

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
router.delete('/:_id', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    console.log("ELIMINAR UN USUARIO");
    yield _Usuario.default.findByIdAndDelete(req.params);
    res.json({
      mensaje: 'Usuario eliminado'
    });
  });

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;