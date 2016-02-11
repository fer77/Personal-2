var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Podcasts = require('./podcastsMdl.js')

var userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    // podcast: [
    //   { type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Podcasts' }
    // ]

    liked: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcasts'
      }
    ],
    disliked: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcasts'
      }
    ],
});

module.exports = mongoose.model('User', userSchema);
