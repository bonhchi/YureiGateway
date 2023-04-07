import path from "path";
import express, { Router } from "express";
import ImageController from "../controllers/images.js";

let imageRouter : Router = express.Router();

let imageController = new ImageController();

imageRouter.get('/api/get-image', imageController.getImage);

export default imageRouter;