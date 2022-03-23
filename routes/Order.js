const express=require('express');
const { create_order } = require('../routecontrollers/Order.controller');
const router=express.Router();
router.post('/add-order',create_order);


module.exports=router