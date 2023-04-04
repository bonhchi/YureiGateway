const express = require('express');
var cors = require('cors');
var configEnv = require('dotenv');

const app = express();

const imagesRoutes = require('./src/routes/images');

configEnv.config();

const port = process.env.PORT || 3001;

app.use(cors({
    credentials: true,
    origin: true
}));

app.use(imagesRoutes);

app.listen(port);