const Device = require('../models/device');

const deviceController = {
    insertDevice: async (req, res) => {
        var data = req.body;
        if ( data.code && data.name ) {
            try {

                var newDevice = Device.build({
                    code: data.code,
                    name: data.name,
                    userId: req.user.id
                });

                newDevice = await newDevice.save();

                if ( newDevice && newDevice instanceof Device ) {
                    return res.json({
                        'status': 'success',
                        'message': 'device succefful registred',
                        'id': newDevice.id
                    });

                } else {
                    return res.status(400).json({
                        'status': 'failed',
                        'message': 'device not registred'
                    });
                }

            } catch (err) {
                console.log(err);
                return res.status(500).json({
                    'status': 'failed',
                    'message': 'device not registred'
                });
            }
        }

        return res.json({
            'status': 'failed',
            'message': 'params data is missing'
        });
    },
    updateDevice: async (req, res) => {
        try {
            let data = req.body;
            
            // TODO - ARRUMAR UPDATE
            await Device.update({
                ...data,
                id: req.params.id
            });

            return res.json({
                status: 'success',
                message: 'device updated with success'
            });

        } catch (err) {
            console.log(err);
            res.status(500).json({
                'status': 'failed',
                'message': 'something went wrong'
            });
        }
    },
    removeDevice: async (req, res) => {
        try {
            const device = await Device.findByPk(req.params.id);

            if ( device && device.userId == req.user.id ) {
                await device.destroy();
                res.json({
                    'status': 'success',
                    'message': 'device succeful removed'
                });

            } else {
                res.status(404).json({
                    'status': 'failed',
                    'message': 'device not found'
                });    
            }

        } catch (err) {
            console.log(err);
            res.status(500).json({
                'status': 'failed',
                'message': 'something went wrong'
            });
        }
    },
    listDevices: async (req, res) => {
        try {
            const devices = await Device.findAll({where: {userId: req.user.id}});
            res.json({
                'status': 'success',
                payload: devices
            });

        } catch (err) {
            console.log(err);
            res.status(500).json({
                'status': 'failed',
                'message': 'something went wrong'
            });
        }
    }
}

module.exports = deviceController;