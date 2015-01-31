'use strict';

var express = require('express');
var controller = require('./account');
var router = express.Router();

router.post('/create', controller.create);
router.get('/list', controller.list);
router.get('/:id', controller.get);

module.exports = router;