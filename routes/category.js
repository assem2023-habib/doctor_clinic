const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const passport = require('passport');
const {
    addCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categoryController');
const router = express.Router();

// إضافة فئة جديدة
router.post('/', passport.authenticate('jwt', { session: false }), addCategory);

// عرض جميع الفئات
router.get('/', getCategories);

// عرض فئة واحدة
router.get('/:id', getCategory);

// تحديث فئة
router.put('/:id', passport.authenticate('jwt', { session: false }), updateCategory);

// حذف فئة
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteCategory);

module.exports = router;
