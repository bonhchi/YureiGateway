const cloudinary = require('../utils/cloudinary');

exports.getImage = async (req, res) => 
{
    try {
        // console.log("test")
        // res.json({msg: "res ok"})
        await cloudinary
        .resources_by_id(
            ["kdry6kikm8ozdxvqpf9b"]
        )
        .then(result=> res.json({result}));
    } catch (error) {
        console.log("con tac");
        return error;
    }
}

exports.getDetailImage = async (req, res) => {

}

exports.uploadImage = async (req, res) => {
    
}