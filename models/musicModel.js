const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let musicSchema = new Schema({
    url :{
        type: String,
        validate: {
          validator: function(value) {
            const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
            return urlPattern.test(value);
          },
          message: 'Veuillez fournir une URL valide.',
        },
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