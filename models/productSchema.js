const Schema = require('mongoose').Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  year: { type: String },
  image: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true },
  memory: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = productSchema;