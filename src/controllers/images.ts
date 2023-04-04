export const cloudinary = require('../utils/cloudinary');

exports.getImage = async (req, res) => 
{
    try {
        await cloudinary.getCloudImage(res);
    } catch (error) {
        console.log(error);
        return error;
    }
}

exports.getDetailImage = async (req, res) => {

}

exports.uploadImage = async (req, res) => {
    
}