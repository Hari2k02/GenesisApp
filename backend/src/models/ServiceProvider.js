const mongoose = require('mongoose');

const ServiceProviderSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  companyName: {
    type: String, 
    required: true,
  },
  email: {
    type: String, 
    required: true
  }
});

module.exports = new mongoose.model('ServiceProvider', ServiceProviderSchema);
