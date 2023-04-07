import express from "express";
import cors from 'cors';
import imageRouter from './src/routes/images.js';
import * as configEnv from 'dotenv';

const app = express();

configEnv.config();

const port = process.env.PORT || 3001;

app.use(cors({
    credentials: true,
    origin: true
}));

app.use(imageRouter);

app.listen(port);

export default app;