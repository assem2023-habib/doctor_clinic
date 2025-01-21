const express = require('express');
const passport = require('passport');
const {
    addAppointment,
    getAppointments,
    getAppointment,
    updateAppointment,
    deleteAppointment
} = require('../controllers/appointmentController');
const router = express.Router();

// إضافة حجز جديد
router.post('/', passport.authenticate('jwt', { session: false }), addAppointment);

// عرض جميع الحجوزات
router.get('/', getAppointments);

// عرض حجز واحد
router.get('/:id', getAppointment);

// تحديث حجز
router.put('/:id', passport.authenticate('jwt', { session: false }), updateAppointment);

// حذف حجز
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteAppointment);

module.exports = router;
