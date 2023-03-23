const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

const cloudinaryConfig = cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY.CLOUD_NAME, 
    api_key: process.env.CLOUDINARY.API_KEY, 
    api_secret: process.env.CLOUDINARY.API_SECRET,
    secure: true
});