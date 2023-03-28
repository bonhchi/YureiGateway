const wallpaper = require('../utils/wallpaper');

exports.getWallpaper = async(req, res) => {
    try {
        await wallpaper.GetWallpaper("one piece");
    } catch (error) {
        console.log(error);
        return error;
    }
}