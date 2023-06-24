var express = require('express');
require('dotenv').config();
var router = express.Router();
const ServiceProvider = require(__dirname + '/../models/ServiceProvider');
const Service = require(__dirname + '/../models/Service');

router.post('/user/services', async (req, res) => {
  console.log(req.body);
  try {
    const serviceType = 'CyberSecurity';
    // const serviceType = 'Finance';
    // const serviceType = 'Construction';
    // const serviceType = 'Law';
    const allServices = await Service.find({serviceType:serviceType});
    console.log(allServices);
    return res.json(allServices);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
