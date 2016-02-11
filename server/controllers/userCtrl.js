var User = require('../models/userMdl');

module.exports = {
    create: function (req, res) {
      User.create(req.body, function (err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      })
  },

    read: function (req, res) {
        console.log('req.query: ', req.query);
        User.find(req.query)
            .exec(function (err, result) {
                if (err) return res.status(500).send(err);
                res.send(result);
            });
    },

    update: function (req, res) {
        User.find(req.params.id, {}, function (err, result) {
            if (err) return res.status(500).send(err);
            if (req.body.hasOwnProperty('like')) {
                result.liked.push(req.body.like);
            }
            if (req.body.hasOwnProperty('dislike')) {
                result.disliked.push(req.body.dislike);
            }
            result.save();
            User.findById(req.params.id).populate('disliked').exec(function(err2, result2) {
              if (err2) return res.status(500).send(err2);
              res.send(result2);
            })
        })
    }
};
