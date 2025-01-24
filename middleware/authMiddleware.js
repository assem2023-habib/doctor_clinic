// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const authenticateToken = async (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (token == null) return res.sendStatus(401); // إذا لم يكن هناك رمز مميز

//   try {
//     const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//     const user = await User.findOne({ where: { id: decoded.userId } });

//     if (!user) return res.sendStatus(403); // إذا لم يتم العثور على المستخدم

//     req.user = user;
//     next();
//   } catch (err) {
//     return res.sendStatus(403); // في حالة فشل التحقق من الرمز المميز
//   }
// };

// module.exports = authenticateToken;

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, 'mySuperSecretKeyThatIsVeryComplex123!', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
