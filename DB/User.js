const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    wish: {
        type: String
    },
    attend: {
        type: String
    }
})

module.exports = User = mongoose.model('user', user);