const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./User');
const Service = require('./Service');

// تعريف نموذج Appointment
const Appointment = sequelize.define('Appointment', {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    serviceId: {
        type: DataTypes.INTEGER,
        references: {
            model: Service,
            key: 'id'
        }
    },
    appointmentDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'booked'
    }
});

Appointment.belongsTo(User, { foreignKey: 'userId' });
Appointment.belongsTo(Service, { foreignKey: 'serviceId' });
User.hasMany(Appointment, { foreignKey: 'userId' });
Service.hasMany(Appointment, { foreignKey: 'serviceId' });

module.exports = Appointment;
