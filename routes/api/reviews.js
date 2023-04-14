const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/reviews'
router.post('/', reviewsCtrl.create);

module.exports = router