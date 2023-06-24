const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  // service name should be the _id here
  _id:{
    serviceName: {
      type:String,
      required: true,
    },
    companyName:{
      type: String,
      required: true,
    }
  },
  serviceType:{
    type: String,
    required: true,
  },
  serviceCost:{
    type:Number, 
    required: true,
  },
  serviceDescription:{
    type: String,
    required: false,
  }

});

module.exports = new mongoose.model('Service', ServiceSchema);
