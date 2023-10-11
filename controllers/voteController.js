const Vote = require('../models/voteModel.js');
const Music = require('../models/musicModel.js')

exports.listAllVotes = async (req, res) =>{
    try{
        const votes = await Vote.find({music_id : req.params.id_music});
        res.status(200);
        res.json(votes);
    }
    catch(error){
        res.status(500);
            console.log(error);
            res.json({ message : 'Erreur serveur'});
    }
}

exports.createAVote = async(req, res) =>{

    try {
        await Music.findById(req.params.id_music);
        const newVote = new Vote({...req.body, music_id : req.params.id_music} ); //pour recup les element champs par champs et valeur par valeur

        try{
            const vote = await newVote.save();
            res.status(200);
            res.json(vote);
        }
        catch(error){
            res.status(500);
                console.log(error);
                res.json({ message : 'Erreur serveur (db)'});
        }
    } catch (error) {
        res.status(500);
            console.log(error);
            res.json({ message : 'Erreur serveur (music inexistant)'});
    }
}

exports.updateAVote = async(req, res) =>{
    try{
        const vote = await Vote.findByIdAndUpdate(req.params.id_vote, req.body, {new: true});
        res.status(200);
        res.json(vote);
    }
    catch(error){
        res.status(500);
        console.log(error);
        res.json({ message : 'Erreur serveur'});
    }
}

exports.deleteAVote = async(req, res) =>{

    try{
        if(await Vote.findById(req.params.id_vote) === null){
            res.status(204);
            res.json({ message : 'Ce vote n existe pas en BDD'});
        }else{
            const vote = await Vote.findByIdAndDelete(req.params.id_vote);
            res.status(200);
            res.json({ message : 'Supprimé'});
        }
    }
    catch(error){
        res.status(500);
        console.log(error);
        res.json({ message : 'Erreur serveur'});
    }
}

exports.getAVote = async(req, res) =>{

    try{
        if(await Vote.findById(req.params.id_vote) === null){
            res.status(204);
            res.json({ message : 'Ce vote n existe pas en BDD'});
        }else{
            const vote = await Vote.findByIdAndDelete(req.params.id_vote);
            res.status(200);
            res.json({ message : 'Supprimé'});
        }
    }
    catch(error){
        res.status(500);
        console.log(error);
        res.json({ message : 'Erreur serveur'});
    }
}