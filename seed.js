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
    {name: 'iPhoneXS', image: 'https://i.imgur.com/DBbTbei.png', category: categories[0], memory: "64GB", price: 200.95},
    {name: 'iPhone XS Max', image: 'https://i.imgur.com/8LbOb0i.png', category: categories[0], memory: "64GB", price: 220.95},
    {name: 'iPhone 11', image: 'https://i.imgur.com/aTzSX4U.png', category: categories[0], memory: "256GB", price: 280.95},
    {name: 'iPhone 12 ProMax', image: 'https://i.imgur.com/uUh4SXp.png', category: categories[0], memory: "128GB", price: 315.95},
    {name: 'iPhone 13 mini ', image: 'https://i.imgur.com/tuNjvoy.png', category: categories[0], memory: "256GB", price: 470.95},
    {name: 'iPhone 14 Plus', image: 'https://i.imgur.com/iFSyKD9.png', category: categories[0], memory: "128GB", price: 600.95},
    {name: 'iPad (8th gen)', image: 'https://i.imgur.com/0Msg9jU.png', category: categories[1], memory: "512GB", price: 180.95},
    {name: 'iPad (9th gen)', image: 'https://i.imgur.com/ZdslUSY.png', category: categories[1], memory: "128GB", price: 220.95},
    {name: 'iPad (10th gen)', image: 'https://i.imgur.com/uXU0IO4.png', category: categories[1], memory: "64GB", price: 280.95},
    {name: 'MacBook 2020', image: 'https://i.imgur.com/BP09Lip.png', category: categories[2], memory: "512GB", price: 1000.95},
    {name: 'MacBook 2021', image: 'https://i.imgur.com/qpqcuJ7.png', category: categories[2], memory: "256GB", price: 1150.95},
    {name: 'MacBook 2022', image: 'https://i.imgur.com/qpqcuJ7.png', category: categories[2], memory: "512GB", price: 1270.95},
    {name: 'MacBook 2023', image: 'https://i.imgur.com/3VjU7MB.png', category: categories[2], memory: "256GB", price: 1350.95},
    {name: 'AirPods Pro (1st gen)', image: 'https://i.imgur.com/XVmAP9k.png', category: categories[3], price: 150.95},
    {name: 'AirPods Pro (2nd gen)', image: 'https://i.imgur.com/9AObDP1.png', category: categories[3], price: 250.95},
    {name: 'AirPods Max', image: 'https://i.imgur.com/U9yDljX.png', category: categories[3], price: 400.95},
    {name: 'USB-C Charge Cable (6ft)', image: 'https://i.imgur.com/hQYyTFn.png', category: categories[4], price: 19.95},
    {name: '12w USB Power Adapter', image: 'https://i.imgur.com/zbW2j6M.png', category: categories[4], price: 69.95},
    {name: 'MagSafe Charger', image: 'https://i.imgur.com/gxOf7WZ.png', category: categories[4], price: 89.95},
    {name: 'iPhone 14 Privacy Screen Protector', image: 'https://i.imgur.com/qrEzJxL.png', category: categories[5], price: 21.95},
    {name: 'iPhone XS OtterBox', image: 'https://i.imgur.com/h5ODZoa.png', category: categories[5], price: 20.95},
    {name: 'MacBook Protection Case', image: 'https://i.imgur.com/O6LGIjf.png', category: categories[5], price: 29.95},
    {name: 'HomePod', image: 'https://i.imgur.com/sVw6nM4.png', category: categories[5], price: 59.95},
  ]);

  console.log(products)

  process.exit();

})();
