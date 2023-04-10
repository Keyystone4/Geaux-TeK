require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Product = require('./models/product');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Phones', sortOrder: 10},
    {name: 'Tablets', sortOrder: 20},
    {name: 'Laptops', sortOrder: 30},
    {name: 'Headphones', sortOrder: 40},
    {name: 'Chargers', sortOrder: 50},
    {name: 'Misc.', sortOrder: 60},
  ]);

  await Product.deleteMany({});
  const products = await Product.create([
    {name: 'iPhoneXS', image: '📱', category: categories[0], price: 200.95},
    {name: 'iPhone XS Max', image: '📱', category: categories[0], price: 220.95},
    {name: 'iPhone 11', image: '📱', category: categories[0], price: 280.95},
    {name: 'iPhone 12 ProMax', image: '📱', category: categories[0], price: 315.95},
    {name: 'iPhone 13 mini ', image: '📱', category: categories[0], price: 470.95},
    {name: 'iPhone 14 Plus', image: '📱', category: categories[0], price: 600.95},
    {name: 'iPad (8th gen)', image: '⎚', category: categories[1], price: 180.95},
    {name: 'iPad (9th gen)', image: '⎚', category: categories[1], price: 220.95},
    {name: 'iPad (10th gen)', image: '⎚', category: categories[1], price: 280.95},
    {name: 'MacBook 2020', image: '💻', category: categories[2], price: 1000.95},
    {name: 'MacBook 2021', image: '💻', category: categories[2], price: 1150.95},
    {name: 'MacBook 2022', image: '💻', category: categories[2], price: 1270.95},
    {name: 'MacBook 2023', image: '💻', category: categories[2], price: 1350.95},
    {name: 'AirPods Pro (1st gen)', image: '🎧', category: categories[3], price: 150.95},
    {name: 'AirPods Pro (2nd gen)', image: '🎧', category: categories[3], price: 250.95},
    {name: 'AirPods Max', image: '🎧', category: categories[3], price: 400.95},
    {name: 'USB-C Charge Cable (6ft)', image: '🔌', category: categories[4], price: 19.95},
    {name: '12w USB Power Adapter', image: '🔌', category: categories[4], price: 69.95},
    {name: 'MagSafe Charger', image: '🔌', category: categories[4], price: 89.95},
    {name: 'iPhone 14 Privacy Screen Protector', image: '😎', category: categories[6], price: 21.95},
    {name: 'iPhone XS OtterBox', image: '😎', category: categories[6], price: 20.95},
    {name: 'MacBook Protection Case', image: '😎', category: categories[6], price: 29.95},
    {name: 'HomePod', image: '😎', category: categories[6], price: 59.95},
  ]);

  console.log(products)

  process.exit();

})();
