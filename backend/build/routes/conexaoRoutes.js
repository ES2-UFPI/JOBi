"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ConexaoController = require('../controllers/ConexaoController'); var _ConexaoController2 = _interopRequireDefault(_ConexaoController);

const router = new (0, _express.Router)()

router.post("/", _ConexaoController2.default.store)
router.post("/chats_contratante", _ConexaoController2.default.chats_contratante)
router.post("/chats_prestador", _ConexaoController2.default.chats_prestador)

exports. default = router;