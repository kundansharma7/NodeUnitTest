const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username : { 
      type: String, 
      required: true
    },
    email : { 
      type: String, 
      required: true
    },
    name: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    created: { 
      type: Date,
      default: Date.now
    }
});
module.exports = mongoose.model('User', userSchema);