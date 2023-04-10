// require('dotenv').config();
// require('./config/database');

// const Category = require('./models/category');
// const Product = require('./models/product');

// // IIFE
// // Immediately Invoked Function Expression
// (async function() {
//   await Category.deleteMany({});
//   const categories = await Category.create([
//     {name: 'Phones', sortOrder: 10},
//     {name: 'Tablets', sortOrder: 20},
//     {name: 'Laptops', sortOrder: 30},
//     {name: 'Headphones', sortOrder: 40},
//     {name: 'Chargers', sortOrder: 50},
//     {name: 'Misc.', sortOrder: 60},
//   ]);

//   await Product.deleteMany({});
//   const products = await Product.create([
//     {name: 'iPhoneXS', image: '📱', category: categories[0], price: 5.95},
//     {name: 'iPhone XS Max', image: '📱', category: categories[0], price: 6.95},
//     {name: 'iPhone 11', image: '📱', category: categories[0], price: 3.95},
//     {name: 'iPhone 12 ProMax', image: '📱', category: categories[0], price: 14.95},
//     {name: 'iPhone 13 mini ', image: '📱', category: categories[0], price: 13.95},
//     {name: 'iPhone 14 Plus', image: '📱', category: categories[0], price: 25.95},
//     {name: 'iPad (8th gen)', image: '⎚', category: categories[1], price: 1.95},
//     {name: 'iPad (9th gen)', image: '⎚', category: categories[1], price: 4.95},
//     {name: 'iPad (10th gen)', image: '⎚', category: categories[1], price: 3.95},
//     {name: 'MacBook 2020', image: '💻', category: categories[2], price: 7.95},
//     {name: 'MacBook 2021', image: '💻', category: categories[2], price: 1.95},
//     {name: 'MacBook 2022', image: '💻', category: categories[2], price: 2.95},
//     {name: 'MacBook 2023', image: '💻', category: categories[2], price: 3.95},
//     {name: 'AirPods Pro (1st gen)', image: '🎧', category: categories[3], price: 2.95},
//     {name: 'AirPods Pro (2nd gen)', image: '🎧', category: categories[3], price: 1.95},
//     {name: 'AirPods Max, image: '🎧', category: categories[3], price: 0.95},
//     {name: 'USB-C Charge Cable (2m), image: '🔌', category: categories[4], price: 2.95},
//     {name: '12w USB Power Adapter', image: '🔌', category: categories[4], price: 3.95},
//     {name: 'MagSafe Charger', image: '🔌', category: categories[4], price: 0.95},
//     {name: 'iPhone 14 Privacy Screen Protector', image: '😎', category: categories[6], price: 0.95},
//     {name: 'iPhone XS OtterBox', image: '😎', category: categories[6], price: 8.95},
//     {name: 'MacBook Protection Case', image: '😎', category: categories[6], price: 3.95},
//     {name: 'HomePod', image: '😎', category: categories[6], price: 7.95},
//   ]);

//   console.log(products)

//   process.exit();

// })();
