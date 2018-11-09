module.exports = function (sequelize, DataTypes) {
    const Products = sequelize.define('Products', {
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        depertment_name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        stock_quantity: {
            type: DataTypes.INTEGER
        }
    });
    return Products;
}