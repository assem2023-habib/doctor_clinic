const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const { sequelize } = require('../config/database');
const User = require('../models/User'); // تأكد من تحديد المسار الصحيح للنموذج

module.exports = {
  up: async () => {
    // بيانات المستخدمين
    const users = [
      {
        username: 'adminUser',
        email: 'admin@example.com',
        password: 'adminpassword',
        is_admin: 1 // مسؤول
      },
      {
        username: 'normalUser',
        email: 'user@example.com',
        password: 'userpassword',
        is_admin: 0 // مستخدم عادي
      }
    ];

    // تشفير كلمات المرور
    for (const user of users) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }

    // إدخال المستخدمين إلى قاعدة البيانات
    await User.bulkCreate(users);
  },

  down: async () => {
    // إزالة البيانات إذا لزم الأمر
    await User.destroy({
      where: {
        email: ['admin@example.com', 'user@example.com']
      }
    });
  }
};
