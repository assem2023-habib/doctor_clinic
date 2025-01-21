const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Category = require('./Category'); // استيراد نموذج Category

// تعريف نموذج Service
const Service = sequelize.define('Service', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Categories', // اسم الجدول يجب أن يتطابق مع اسم الجدول الذي يتم إنشاؤه لنموذج Category
            key: 'id'
        }
    }
});

// Service.belongsTo(Category, { foreignKey: 'categoryId' });
// Category.hasMany(Service, { foreignKey: 'categoryId' });

module.exports = Service;
