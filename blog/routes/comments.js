const express = require('express');
const router = express.Router({mergeParams: true});

const models  = require('../db/models');

// CREATE COMMENT
router.post('/posts/:postId/comments', (req,res) => {
    req.body.PostId = req.params.postId;

    models.Comment.create(req.body)
        .then(comment => {
            res.redirect('/posts/' + req.params.postId)
        })
        .catch(err => {
            return console.log(err);
        })
});

module.exports = router;
