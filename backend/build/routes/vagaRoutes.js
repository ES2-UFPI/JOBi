"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _VagaController = require('../controllers/VagaController'); var _VagaController2 = _interopRequireDefault(_VagaController);

const router = new (0, _express.Router)()
 
router.post("/", _VagaController2.default.store);
router.get("/contratante/:id", _VagaController2.default.index);
router.get("/:id", _VagaController2.default.select_id);
router.get("/home/:categoria", _VagaController2.default.select_home);
router.put("/:id", _VagaController2.default.update);

exports. default = router;