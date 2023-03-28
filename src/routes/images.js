const path = require('path');

const express = require('express');

const router = express.Router();

const imagesController = require('../controllers/images');

router.get('/api/get-image', imagesController.getImage);

//router.get('/api/get-detail-image/:imageId', imagesController.getImage);

module.exports = router;