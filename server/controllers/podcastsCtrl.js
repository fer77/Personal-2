var Podcasts = require('../models/podcastsMdl');

module.exports = {
    create: function (req, res) {
      Podcasts.create(req.body, function (err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      })
  },

    read: function (req, res) {
        console.log('req.query: ', req.query);
        Podcasts.find({podId: req.query.podcastId})
            .exec(function (err, result) {
                if (err) return res.status(500).send(err);
                res.send(result);
            });
    },

    update: function (req, res) {
      console.log(req.body);
        Podcasts.findOne({podId:req.params.id}, function (err, result) {
            if (err) return res.status(500).send(err);

            console.log(result);

            if (result) {
              if(req.body.direction ==="upvote") {
              result.upVotes += 1;
            } else {
              result.downVotes += 1;
            }

              result.save();
              return res.send("ok");
            } else {
              console.log(req.body);
              Podcasts.create({title:req.body.title ,podId:req.params.id*1 ,upVotes:1, downVotes:1}, function(err, result){
                console.log(result);
                res.send(result);
              })
            }

        })
    },

};
