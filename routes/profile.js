const express = require('express');
const passport = require('passport');
const { getProfile, updateProfile, deleteProfile } = require('../controllers/profileController');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

// عرض بيانات الملف الشخصي
router.get('/', authenticateToken, getProfile);

// تحديث بيانات الملف الشخصي
router.put('/', passport.authenticate('jwt', { session: false }), updateProfile);

// حذف حساب المستخدم
router.delete('/', passport.authenticate('jwt', { session: false }), deleteProfile);

module.exports = router;
