const router = require('express').Router();

const { read, signup, users } = require('../controllers/controllers.js');

router.get('/read', read);
router.post('/signup', signup);
router.get('/users', users);

module.exports = router;
