const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

const cloudinaryConfig = cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure: true
});

exports.getCloudImage = async (res) => {
    try {
        await cloudinary.api
        .resources()
        .then(result=> res.json({result}));
    } catch (error) {
        console.log(error);
        return error;
    }
}  