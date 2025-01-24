const express = require('express');
const authenticateToken = require('../middleware/authMiddleware'); // تأكد من تحديد المسار الصحيح للـ middleware
const isAdmin = require('../middleware/isAdmin'); // تأكد من تحديد المسار الصحيح للـ middleware

const router = express.Router();

// حماية مسارات المسؤولين بتوثيق المستخدم والتحقق من صلاحيات المسؤول
router.use(authenticateToken, isAdmin);

router.get('/dashboard', (req, res) => {
    res.send('Admin dashboard');
});

// أي مسارات أخرى

module.exports = router;
