"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ContratanteController = require('../controllers/ContratanteController'); var _ContratanteController2 = _interopRequireDefault(_ContratanteController);

const router = new (0, _express.Router)()

router.post("/", _ContratanteController2.default.store)
router.get("/select", _ContratanteController2.default.index)

exports. default = router;