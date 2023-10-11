const express = require('express');
const router  = express.Router(); 


const voteController = require('../controllers/voteController');


router
    .route('/posts/:id_post/votes')
    .get(voteController.listAllVotes)
    .post(voteController.createAVote)


router 
    .route('/votes/:id_vote')
    .get(voteController.getAVote)
    .put(voteController.updateAVote)
    .delete(voteController.deleteAVote)


module.exports = router;