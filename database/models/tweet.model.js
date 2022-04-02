const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
    content: {
        type: String, 
        maxlength: [140, 'Tweet trop long !'], 
        minlength: [1, 'Tweet trop court !'],
        required: [true, 'Le contenu ne peut etre vide']    
    }
})

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;