const Appointment = require('../models/Appointment');
const Service = require('../models/Service');

// إضافة حجز جديد
exports.addAppointment = async (req, res) => {
    try {
        const { serviceId, appointmentDate } = req.body;
        const userId = req.user.id;

        // تحقق من وجود حجز في نفس الوقت
        const existingAppointment = await Appointment.findOne({
            where: { serviceId, appointmentDate }
        });

        if (existingAppointment) {
            return res.status(400).json({ error: 'Service is already booked at this time' });
        }

        const appointment = await Appointment.create({ userId, serviceId, appointmentDate });
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// عرض جميع الحجوزات
exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({ include: [Service] });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// عرض حجز واحد
exports.getAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.findByPk(id, { include: [Service] });
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// تحديث حجز
exports.updateAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const { serviceId, appointmentDate, status } = req.body;

        // تحقق من وجود الحجز
        const appointment = await Appointment.findByPk(id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        // تحقق من وجود حجز في نفس الوقت إذا تم تغيير الوقت أو الخدمة
        if (appointment.serviceId !== serviceId || appointment.appointmentDate !== appointmentDate) {
            const existingAppointment = await Appointment.findOne({
                where: { serviceId, appointmentDate }
            });

            if (existingAppointment) {
                return res.status(400).json({ error: 'Service is already booked at this time' });
            }
        }

        appointment.serviceId = serviceId;
        appointment.appointmentDate = appointmentDate;
        appointment.status = status;

        await appointment.save();
        res.status(200).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// حذف حجز
exports.deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.findByPk(id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        await appointment.destroy();
        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
