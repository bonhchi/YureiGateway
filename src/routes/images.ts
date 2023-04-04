const path = require('path');

export const express = require('express');

let router = express.Router();

const imagesController = require('../controllers/images');

router.get('/api/get-image', imagesController.getImage);

//router.get('/api/get-detail-image/:imageId', imagesController.getImage);

module.exports = router;