const express = require('express');
const router  = express.Router(); 

const musicController = require('../controllers/musicController');


router
    .route('/musics')
    .get(musicController.listAllMusics)
    // .post(postController.createAPost)


// router 
//     .route('/musics/:id_music')
//     .get(postController.getAPost)
//     .put(postController.updateAPost)
//     .delete(postController.deleteAPost)

module.exports = router;