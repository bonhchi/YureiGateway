const { AnimeWallpaper } = require("anime-wallpaper");

const wall = new AnimeWallpaper();

exports.GetWallpaper = async(res) => {
    console.log(res);
    try{
    const wallpaper 
        = await wall.getAnimeWall3()
        return console.log(wallpaper);
    
    } catch (error){
        console.log("bị đây nè");
        console.log(error);
        return error;
    }
}
