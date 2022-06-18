const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'SUPER_CHAVE');
        const userId = decodedToken.userId;

        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';

        } else {
            next();
        }
        
    } catch {
        res.status(401).json({
            error: new Error('User not authenticated')
        });
    }
}

module.exports = auth;