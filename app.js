const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors'); // استيراد حزمة cors
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const serviceRoutes = require('./routes/service');
const profileRoutes = require('./routes/profile');
const appointmentRoutes = require('./routes/appointment');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/adminRoutes'); // استيراد مسارات المسؤولين
const authenticateToken = require('./middleware/authMiddleware'); // استيراد middleware للتوثيق
const isAdmin = require('./middleware/isAdmin'); // استيراد middleware للتحقق من صلاحيات المسؤول



app.use(bodyParser.json()); // أو أي middleware آخر تستخدمه

// توجيه مسارات المسؤولين مع التحقق من صلاحيات المسؤول
app.use('/api/admin',authenticateToken, isAdmin, adminRoutes); // تأكد من إضافة middleware للتحقق من صلاحيات المسؤول إذا لزم الأمر

// إعداد قاعدة البيانات
const { sequelize } = require('./config/database');
const User = require('./models/User');
const Category = require('./models/Category');
const Service = require('./models/Service');
const Appointment = require('./models/Appointment');

// إعدادات الجلسة
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: false
}));

// إعداد CORS للسماح بالطلبات من الواجهة الأمامية لـ Flutter
// app.use(cors({
//     origin: 'http://localhost:3000', // استبدل بـ عنوان الواجهة الأمامية لـ Flutter
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true
// }));
app.use(cors());

// إعدادات Passport
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

// Middleware لتحليل body للطلبات
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// توجيه مسارات التوثيق
app.use('/api/auth', authRoutes);

// توجيه مسارات الفئات
app.use('/api/categories', categoryRoutes);

// توجيه مسارات الخدمات
app.use('/api/services', serviceRoutes);

// توجيه مسارات الملف الشخصي
app.use('/api/profile', profileRoutes);

// توجيه مسارات الحجوزات
app.use('/api/appointments', appointmentRoutes);

// بدء الخادم
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});



