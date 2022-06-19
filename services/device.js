const Device = require('../models/device');

const deviceService = {
    upsert: async (params) => {
        return Device.upsert(params);
    }
};

module.exports = deviceService;