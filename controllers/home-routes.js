const { User, Transaction, Category } = require('../models');
const router = require('express').Router();
const {onlyIfLoggedIn} = require('../middleware/auth');

// home route get request
router.get('/', async (req, res) => {
  try {
    // Pass serialized data into Handlebars.js template
    res.render('landing');
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;