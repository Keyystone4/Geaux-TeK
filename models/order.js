const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = require('./productSchema');

const lineProductSchema = new Schema({
  qty: { type: Number, default: 1 },
  product: productSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineProductSchema.virtual('extPrice').get(function() {
  // 'this' keyword is bound to the lineItem document
  return this.qty * this.product.price;
});

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lineProducts: [lineProductSchema],
  isPaid: { type: Boolean, default: false } 
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineProducts.reduce((total, product) => total + product.extPrice, 0);
});

orderSchema.virtual('orderQty').get(function() {
  return this.lineProducts.reduce((total, product) => total + product.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    // query object
    { user: userId, isPaid: false },
    // update doc - provides values when inserting
    { user: userId },
    // upsert option
    { upsert: true, new: true }
  );
};

// Instance method for adding an item to a cart (unpaid order)
orderSchema.methods.addProductToCart = async function (productId) {
  // 'this' keyword is bound to the cart (order doc)
  const cart = this;
  // Check if the item already exists in the cart
  const lineProduct = cart.lineProducts.find(lineProduct => lineProduct.product._id.equals(productId));
  if (lineProduct) {
    // It already exists, so increase the qty
    lineProduct.qty += 1;
  } else {
    // Get the item from the "catalog"
    // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
    const Product = mongoose.model('Product');
    const product = await Product.findById(productId);
    // The qty of the new lineItem object being pushed in defaults to 1
    cart.lineProducts.push({ product });
  }
  // return the save() method's promise
  return cart.save();
};

// Instance method to set an item's qty in the cart
orderSchema.methods.setProductQty = function(productId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line item in the cart for the menu item
  const lineProduct = cart.lineProducts.find(lineProduct => lineProduct.product._id.equals(productId));
  if (lineProduct && newQty <= 0) {
    // Calling deleteOne, removes the lineItem subdoc from the cart.lineItems array
    lineProduct.remove();
  } else if (lineProduct) {
    // Set the new qty - positive value is assured thanks to prev if
    lineProduct.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);
