import path from "path";
import express from "express";

let router = express.Router();

const imagesController = require('../controllers/images');

router.get('/api/get-image', imagesController.getImage);

export default router;