var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var podcastSchema = new Schema({
    title: {
        type: String,
    },
    podId: {
      type: Number,
      unique: true,
      required: true,
      index: true
    },
    upVotes: {type: Number},
    downVotes: {type: Number}
});


module.exports = mongoose.model('Podcasts', podcastSchema);
