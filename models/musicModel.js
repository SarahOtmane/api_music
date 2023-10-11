const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let musicSchema = new Schema({
    url :{
        type : String,
        required : true
    },
    name :{
        type : String,
        required : 'le contenu est requis'
    },
    firstName :{
        type : String,
        required : 'le contenu est requis'
    },
    submitDate :{
        type : Date,
        default : Date.now
    }

});

module.exports = mongoose.model('Music', musicSchema);