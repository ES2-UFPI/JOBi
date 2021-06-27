"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CandidatoController = require('../controllers/CandidatoController'); var _CandidatoController2 = _interopRequireDefault(_CandidatoController);

const router = new (0, _express.Router)()

router.post("/", _CandidatoController2.default.store);
router.get("/vaga/:id", _CandidatoController2.default.index);
router.get("/:id", _CandidatoController2.default.select);
router.put("/:id", _CandidatoController2.default.update);

exports. default = router;