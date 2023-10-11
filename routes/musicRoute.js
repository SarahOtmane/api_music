const express = require('express');
const router  = express.Router(); 

const musicController = require('../controllers/musicController');


router
    .route('/musics')
    .get(musicController.listAllMusics)
    .post(musicController.createAMusic)


router 
    .route('/musics/:id_music')
    .get(musicController.getAMusic)
//     .put(musicController.updateAPost)
//     .delete(musicController.deleteAPost)

module.exports = router;