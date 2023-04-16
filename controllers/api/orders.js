const Order = require('../../models/order');
// const Item = require('../../models/item');

module.exports = {
  cart,
  addToCart,
  setProductQtyInCart,
  checkout,
  allOrders
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addProductToCart(req.params.id);
  res.json(cart);
}

// Updates an item's qty in the cart
async function setProductQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setProductQty(req.body.productId, req.body.newQty);
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  // console.log(cart);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}

async function allOrders(req, res) {
  const cart = await Order.find({ user: req.user._id });
  console.log(cart);
  res.json(cart);
}