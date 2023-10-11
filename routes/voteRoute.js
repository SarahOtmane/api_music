const express = require('express');
const router  = express.Router(); 


const voteController = require('../controllers/voteController');


router
    .route('/musics/:id_music/votes')
    .get(voteController.listAllVotes)
    .post(voteController.createAVote)


router 
    .route('/votes/:id_vote')
    .get(voteController.getAVote)
    .put(voteController.updateAVote)
    .delete(voteController.deleteAVote)


module.exports = router;