import CloudinaryUtils from '../utils/cloudinary.js';

let cloudinaryUtil =  new CloudinaryUtils();
export default class ImageController {

    getImage = async (req : any, res : any) => 
    {
        try {
            await cloudinaryUtil.getCloudImage(res);
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

