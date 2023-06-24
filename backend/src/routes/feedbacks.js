var express = require('express');
require('dotenv').config();
var router = express.Router();
const ServiceProvider = require(__dirname + '/../models/ServiceProvider');
const Service = require(__dirname + '/../models/Service');
const Feedback = require(__dirname + '/../models/Feedback');

router.post('/user/feedback', async (req, res) => {
  //console.log(req.body);
  try {
    const {name,feedbacks} = req.body;

    //console.log(feedbacks[0]._id);
    //console.log(req.body);
    const checkExist = await Feedback.findOne({_id:name});
    if(checkExist){
        const checkUser = await Feedback.findOne({_id:name,feedbacks:{ $elemMatch: { _id: feedbacks[0]._id}}});
        if(checkUser){
            const update = await Feedback.updateOne({_id:name,feedbacks:{ $elemMatch: { _id: feedbacks[0]._id}}},{$set:{'feedbacks.$':feedbacks[0]}});
        }
        else{
            const update = await Feedback.updateOne({_id:name},{$push:{feedbacks:feedbacks}});
        }
    }
    else{
        const newFeedback = await Feedback.create({ _id: name,feedbacks:feedbacks});
        console.log(newFeedback);
    }
    
    
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
