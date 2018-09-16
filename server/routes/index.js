const express = require('express');

const router = express.Router();

const ctrl = require('../controllers');

router.get('/api/shark', ctrl.getShark);

module.exports = router;
