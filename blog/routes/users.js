const express = require('express');
const router = express.Router();

const models  = require('../db/models');

/* GET users listing. */
router.get('/users', (req, res, next) => {
	models.User.findAll().then((users) => {
   	res.render('users-index', { users: users })
	})
});

router.post('/users', (req,res) => {
	models.User.create(req.body).then((user) => {
		res.redirect('/')
	});
});

module.exports = router;
