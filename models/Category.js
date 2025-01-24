const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Service = require('./Service'); // استيراد نموذج Service

// تعريف نموذج Category
const Category = sequelize.define('Category', {
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
    }
});

// تعيين العلاقات
Category.hasMany(Service, { foreignKey: 'categoryId' });
Service.belongsTo(Category, { foreignKey: 'categoryId' });

// تصدير النموذج
module.exports = Category;
