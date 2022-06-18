const userService = require('./users');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const auth = {
    authenticate: async (req, res) => {
        let body = req.body;
        if ( body.email && body.password ) {
            let params = {
                email: body.email,
                password: body.password
            };

            try {
                const user = await userService.findUser(params);
                if (user && user instanceof User) {
                    const token = jwt.sign(
                        {userId: user.id},
                        'SUPER_CHAVE',
                        {expiresIn: '7d'}
                    );

                    return res.json({
                        status: 'success',
                        message: 'User logged with success',
                        token
                    });

                } else {
                    return res.status(404).json({
                        status: 'failed',
                        message: 'User not founded'
                    });
                }
    
            } catch (err) {
                console.log(err);
                res.status(500).json('Something went wrong.')
            }
        } 
    }
}

module.exports =  auth;