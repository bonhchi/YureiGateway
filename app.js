const express = require('express');
var cors = require('cors');

const app = express();

const imagesRoutes = require('./src/routes/images');


const port = process.env.PORT || 3001;
app.use(cors({
    credentials: true,
    origin: true
    }));

app.use(imagesRoutes);

app.listen(port);