const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, 'mySuperSecretKeyThatIsVeryComplex123!', { expiresIn: '1h' });
  };

// تسجيل مستخدم جديد
exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password });
        // const token = jwt.sign({ id: user.id }, 'yourJWTSecret', { expiresIn: '1h' });
        const token = generateToken(user);
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// تسجيل دخول المستخدم
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid password' });
        }
        
        const token = generateToken(user);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
