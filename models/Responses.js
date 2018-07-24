const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema ({
  name: { 
    type: String, 
    default: 'No Name' 
  },
  message: { 
    type: String, 
    default: 'No Message' 
  },
  email: { 
    type: String, 
    default: 'No Email' 
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Responses = mongoose.model("mainclients", responseSchema);

module.exports = Responses;