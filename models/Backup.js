const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const backupSchema = new Schema ({
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

const Backup = mongoose.model("backupclients", backupSchema);

module.exports = Backup;