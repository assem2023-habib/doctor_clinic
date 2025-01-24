const express = require('express');
const {
    addService,
    getServices,
    getService,
    updateService,
    deleteService
} = require('../controllers/serviceController');
const router = express.Router();
const passport = require('passport');

// إضافة خدمة جديدة
router.post('/', passport.authenticate('jwt', { session: false }), addService);

// عرض جميع الخدمات
router.get('/', getServices);

// عرض خدمة واحدة
router.get('/:id', getService);

// تحديث خدمة
router.put('/:id', passport.authenticate('jwt', { session: false }), updateService);

// حذف خدمة
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteService);

module.exports = router;
