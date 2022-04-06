const router = require('express').Router();

const { read, signup, users } = require('../controllers/controllers.js');

router.get('/read', read);
router.get('/signup', signup);
router.get('/users', users);

module.exports = router;
