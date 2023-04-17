const Review = require('../../models/review');

module.exports = {
  create,
  index,
  update,
  deleteOne,
  findOne
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
    // const foundReview = await Review.find({ user: req.user._id, id:req.params.id})
    // if ( req.user._id
    console.log(req.user._id)
    const allReviews = await Review.findByIdAndUpdate({ user: req.user._id, _id:req.params.id}, req.body, {new: true});
    
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

async function findOne(req, res) {
  try {
    const foundReview = await Review.find({_id:req.params.id});
    
    res.json(foundReview)
  } catch (err) {
    res.status(400).json(err);
  }
}