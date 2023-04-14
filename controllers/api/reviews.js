const Review = require('../../models/review');

module.exports = {
  create
};

async function create(req, res) {
  try {
    req.body.user = req.user._id

    const createdReview = await Review.create(req.body);

    res.json(createdReview)
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}