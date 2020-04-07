const message = require('../components/messages/network')
const user = require('../components/user/network')
const chat = require('../components/chat/network')

const routes = function (server) {
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat);
}

module.exports = routes;