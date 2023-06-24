const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    //_id is the username of users
  _id: {
    type: String,
    required: true,
  },
  postedDate:{
    type: Date,
    required: true,
  },
  rating:{
    type: Number,
    required: true,
  },
  review:{
    type: String,
    required: false,
  }
});

module.exports = new mongoose.model('feedback', FeedbackSchema);
