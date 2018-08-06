const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  name: { 
    type: String, 
    default: 'No Name'
  },
  email: { 
    type: String, 
    default: 'No Email'
  }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
