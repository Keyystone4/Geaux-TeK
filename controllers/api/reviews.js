const Review = require('../../models/review');

module.exports = {
  create,
  index,
  update,
  deleteOne
};

async function create(req, res) {
  try {
    req.body.user = req.user._id
    const createdReview = await Review.create(req.body);
    ;

    res.json(createdReview)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const allReviews = await Review.find({product:req.params.id});
    
    res.json(allReviews)
  } catch (err) {
    res.status(400).json(err);
  }
}


async function update(req, res) {
  try {
    const allReviews = await Review.findByIdAndUpdate(req.params.id, req.body, {new: true});
    
    res.json(allReviews)
  } catch (err) {
    res.status(400).json(err);
  }
  
}

async function deleteOne(req, res) {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    
  } catch (err) {
    res.status(400).json(err);
  }
}