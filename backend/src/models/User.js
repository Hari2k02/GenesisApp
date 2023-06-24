const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true
    },
    middleName: {
      type: String, 
      required: false
    },
    lastName: {
      type: String, 
      required: true
    }
  },
  email: {
    type: String, 
    required: true
  }
});

module.exports = new mongoose.model('User', UserSchema);
