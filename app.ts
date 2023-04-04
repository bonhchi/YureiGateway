import express from "express";
import cors from 'cors';

import imagesRoutes from './src/routes/images';

let configEnv = require('dotenv');
const app = express();

configEnv.config();

const port = process.env.PORT || 3001;

app.use(cors({
    credentials: true,
    origin: true
}));

app.use(imagesRoutes);

app.listen(port);