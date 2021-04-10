const express = require('express');
const router = express.Router({mergeParams: true});
const Sequelize = require('sequelize');
const op = Sequelize.Op;

const models  = require('../db/models');

// NEW
router.get('/posts/new', (req, res, next) => {
   	res.render('posts-new', {})
});

// CREATE
router.post('/posts', (req,res) => {
  // RESOLVE PROMISES
	models.Post.create(req.body) //=> RETURNS A PROMISE
    .then(post => {
      // IF PROMISE IS A SUCCESS (NO ERROR)
  	  res.redirect(`/posts/${post.id}`);
    })
    .catch(err => {
      // IF PROMISE IS AN ERROR
      console.log(err);
      // error message



      // generic error page
      res.render('error-page');
    });

});

// SHOW
router.get('/posts/:id', (req, res, next) => {
    models.Post.findById(req.params.id).then(post => {
        post.getComments({ order: [['createdAt', 'DESC']] }).then(comments => {
            res.render('posts-show', { post: post, comments: comments})
        });
    });
});

// EDIT
router.get('/posts/:id/edit', (req, res, next) => {
    models.Post.findById(req.params.id).then(post => {
        res.render('posts-edit', { post })
    });
});


// UPDATE
router.put('/posts/:id', (req, res, next) => {
    models.Post.findById(req.params.id).then(post => {
        post.update(req.body).then(post => {
            res.redirect(`/posts/${post.id}`); // => SHOW
        })
    })
    .catch(err => {
        reqconsole.log(err);
    })
});

// DESTROY
router.delete('/posts/:id', (req, res, next) => {
    // models.Post.findById(req.params.id).then(post => {
    //     post.getComments({ order: [['createdAt', 'DESC']] }).then(comments => {
    //         res.render('posts-show', { post: post, comments: comments})
    //     });
    // });
});


// SEARCH
router.get('/search', (req, res, next) => {
    models.Post.findAll({
        where: {
            title: {
                [op.like]: `%${req.query.term}%`
            }
        }
    }).then((posts) => {
        res.render('index', { posts: posts, term: req.query.term })
    });
});



module.exports = router;
