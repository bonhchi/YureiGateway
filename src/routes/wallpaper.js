const path = require('path');

const express = require('express');

const router = express.Router();

const wallpaperController = require('../controllers/wallpaper');

router.get('/api/get-wallpaper', wallpaperController.getWallpaper);

//router.get('/api/get-detail-image/:imageId', imagesController.getImage);

module.exports = router;