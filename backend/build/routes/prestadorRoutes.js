"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _PrestadorController = require('../controllers/PrestadorController'); var _PrestadorController2 = _interopRequireDefault(_PrestadorController);

const router = new (0, _express.Router)()

router.post("/", _PrestadorController2.default.store)
router.get("/select", _PrestadorController2.default.index)
router.put("/:id", _PrestadorController2.default.update)
router.post("/curriculo", _PrestadorController2.default.curriculo)


exports. default = router;