// const mongoose = require('mongoose');
// const NoteSchema = new mongoose.Schema({  
//   title: String,
//   description: String
// });
// module.exports = mongoose.model('Note', NoteSchema);


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

module.exports = mongoose.model('User', user);