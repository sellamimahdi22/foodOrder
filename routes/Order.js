const express=require('express');
const { create_order, get_orders, get_oneorder } = require('../routecontrollers/Order.controller');
const router=express.Router();
router.post('/add-order',create_order);
router.get('/all-orders',get_orders);
router.get('/one-order/:id',get_oneorder);


module.exports=router