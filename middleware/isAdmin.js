// const User = require('../models/User'); // تأكد من تحديد المسار الصحيح للنموذج

// const isAdmin = async (req, res, next) => {
//   try {
//     // افترض أنك تقوم بالتوثيق عبر JWT وتخزين ID المستخدم في توكن
//     const userId = req.user.id; // عدل بناءً على كيفية الحصول على ID المستخدم
//     const user = await User.findByPk(userId);

//     if (user && user.is_admin === 1) { // تحقق من قيمة is_admin
//       next(); // المستخدم مسؤول، استمر في تنفيذ الطلب
//     } else {
//       res.status(403).json({ message: 'Access denied.' }); // أو يمكنك إرسال رسالة خطأ أخرى
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = isAdmin;

const User = require('../models/User'); // تأكد من تحديد المسار الصحيح للنموذج

const isAdmin = async (req, res, next) => {
    try {
        // افترض أنك تقوم بالتوثيق عبر JWT وتخزين ID المستخدم في توكن
        const userId = req.user.id; // عدل بناءً على كيفية الحصول على ID المستخدم
        const user = await User.findByPk(userId);

        if (user && user.is_admin === 1) { // تحقق من قيمة is_admin
            next(); // المستخدم مسؤول، استمر في تنفيذ الطلب
        } else {
            res.status(403).json({ message: 'Access denied.' }); // أو يمكنك إرسال رسالة خطأ أخرى
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = isAdmin;
