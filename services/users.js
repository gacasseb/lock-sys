const User = require('../models/user');

const user = {
    insert: async (params) => {
        const newUser = User.build(params);
        return newUser.save();
    },
    findUser: async (params) => {
        return User.findOne({
            where: params
        });
    }
}

module.exports = user;