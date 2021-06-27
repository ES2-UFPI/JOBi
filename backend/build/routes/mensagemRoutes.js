"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _MensagemController = require('../controllers/MensagemController'); var _MensagemController2 = _interopRequireDefault(_MensagemController);

const router = new (0, _express.Router)()

router.post("/", _MensagemController2.default.store)

exports. default = router;