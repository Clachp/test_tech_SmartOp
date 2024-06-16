const express = require('express');
const router = express.Router();
const { SurgeonController} = require('./Controllers')


router.get('/', SurgeonController.getAllSurgeons);

router.get('/{id}', SurgeonController.getOneSurgeon);

router.get('/{name}', SurgeonController.getSurgeonByName);

module.exports = router;