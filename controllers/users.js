const User = require('../models/user');
const UserService = require('../services/users');

const userController = {
    insertUser: async (req, res) => {
        let data = req.body;
        if ( data.name && data.email && data.password ) {

            // TODO validation of params
            const params = {
                name: data.name,
                email: data.email,
                password: data.password
            };

            const user = await UserService.insert(params);

            if ( user && user instanceof User ) {
                return res.json({
                    'status': 'success',
                    'message': 'user succefful registred',
                    'id': user.id
                });

            } else {
                res.statusCode = 400;
                return res.json({
                    'status': 'failed',
                    'message': 'user not registred'
                });
            }
        }

        res.statusCode = 400;
        return res.json({
            'status': 'failed',
            'message': 'params data is missing'
        });
    }
}

module.exports = userController;