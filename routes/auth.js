// const express = require('express');
// const passport = require('passport');
// const { register, login } = require('../controllers/authController');
// const router = express.Router();

// // معالجة تسجيل الدخول
// router.post('/login', login);

// // معالجة إنشاء الحساب
// router.post('/register', register);

// module.exports = router;

const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// معالجة تسجيل الدخول
router.post('/login', login);

// معالجة إنشاء الحساب
router.post('/register', register);

module.exports = router;