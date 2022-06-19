const jwt = require('jsonwebtoken');
const user = require('../services/users');

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'SUPER_CHAVE');
        const userId = decodedToken.userId;

        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';

        } else {
            req.user = await user.findUser({id: userId});
            next();
        }
        
    } catch {
        res.status(401).json({
            error: new Error('User not authenticated')
        });
    }
}

module.exports = auth;