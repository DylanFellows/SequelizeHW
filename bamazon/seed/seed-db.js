// Import Database Models
const db = require('../models');

// Syncing sequelize models 
db.sequelize.sync().then(function () {
    console.log('Made it after sync');
    db.Products.bulkCreate([
        { product_name: 'Laptop', department_name: 'Electronics', price: 10, stock_quantity: 100 },
        { product_name: 'Desktop', department_name: 'Electronics', price: 20, stock_quantity: 90 },
        { product_name: 'Mouse', department_name: 'Electronics', price: 30, stock_quantity: 80 },
        { product_name: 'Deodorant', department_name: 'H&B aides', price: 40, stock_quantity: 70 },
        { product_name: 'Soap', department_name: 'H&B aides', price: 50, stock_quantity: 60 },
        { product_name: 'Toilet Paper', department_name: 'H&B aides', price: 60, stock_quantity: 50 },
        { product_name: 'Oil', department_name: 'Automotive', price: 70, stock_quantity: 40 },
        { product_name: 'Wrench', department_name: 'Automotive', price: 80, stock_quantity: 30 },
        { product_name: 'Air freshner', department_name: 'Automotive', price: 90, stock_quantity: 20 },
        { product_name: 'Coolant', department_name: 'Automotive', price: 100, stock_quantity: 10 },
    ]).then(function (response) {
        console.log('Data successfully added!')
    }).catch(function (error) {
        console.log('Error', error)
    });
});