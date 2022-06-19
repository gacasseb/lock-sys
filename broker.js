const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const port = 1883;
const user = require('./services/users');

server.listen(port, function() {
    console.log('Broker started on port', port);
});

aedes.authorizePublish = async (client, packet, callback) => {
    // Permit only publish from broker
    callback(new Error("Not authenticated"));
}

aedes.on('subscribe', (subscriptions, client) => {
    console.log(subscriptions);
    aedes.publish({topic: 'asd', payload: 'aloha!'});
});

module.exports = aedes;