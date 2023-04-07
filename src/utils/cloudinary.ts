import cloudinary from 'cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

const cloudinaryConfig = cloudinary.v2.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure: true
});
export default class CloudinaryUtils {
    getCloudImage = async (res : any) => {
        try {
            await cloudinary.v2.api
            .resources()
            .then((result : any)=> res.json({result}));
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}
