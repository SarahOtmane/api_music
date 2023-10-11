const Music = require('../models/musicModel');

exports.listAllMusics = async (req, res) =>{
    try{
        const musics = await Music.find({});
        res.status(200);
        res.json(musics);
    }
    catch(error){
        res.status(500);
            console.log(error);
            res.json({ message : 'Erreur serveur'});
    }
}

exports.createAMusic = async(req, res) =>{
    const newMusic = new Music(req.body);

    try{
        const music = await newMusic.save();
        res.status(200);
        res.json(music);
    }
    catch(error){
        res.status(500);
            console.log(error);
            res.json({ message : 'Erreur serveur'});
    }
}