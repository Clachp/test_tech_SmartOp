const express = require('express');
const router = express.Router();
const { SurgeonController} = require('./Controllers')


router.get('/surgeons', SurgeonController.getAllSurgeons);
router.get('/:id', SurgeonController.getOneSurgeon);
router.get('/surgeon/:name', SurgeonController.getSurgeonByName);

module.exports = router;