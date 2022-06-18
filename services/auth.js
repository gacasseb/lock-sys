const userController = require('../controllers/users');

const auth = {
    authenticate: async (req, res) => {
        console.log(req.body);
        let body = req.body;
        if ( body.email && body.password ) {
            let params = {
                email: body.email,
                password: body.password
            };

            try {
                const user = await userController.findUser(params);
                console.log(user);
    
                res.json("entou!");
            } catch (err) {
                console.log('erro', err);
                res.statusCode = 404;
                res.json("Usuário não encontrado");
            }
        } 
    }
}

module.exports =  auth;