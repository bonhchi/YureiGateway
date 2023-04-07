export const cloudinary = require('../utils/cloudinary');
export default class ImageController {

    getImage = async (req : any, res : any) => 
    {
        try {
            await cloudinary.getCloudImage(res);
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    getDetailImage = async (req : any, res : any) => {

    }

    uploadImage = async (req : any, res : any) => {
    
    }
}

