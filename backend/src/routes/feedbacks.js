var express = require('express');
require('dotenv').config();
var router = express.Router();
const ServiceProvider = require(__dirname + '/../models/ServiceProvider');
const Service = require(__dirname + '/../models/Service');
const Feedback = require(__dirname + '/../models/Feedback');

router.post('/user/feedback', async (req, res) => {
  //console.log(req.body);
  try {
    const {serviceName,feedbacks} = req.body;
    console.log(req.body);
    const newFeedback = await Feedback.create({ _id: serviceName,feedbacks:feedbacks});
    console.log(newFeedback);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/user/Servicefeedback', async (req, res) => {
  //console.log(req.body);
  try {
    const {companyName} = req.body;

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
