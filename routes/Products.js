const express=require('express');
const { get_products, add_product, delete_products, edit_products } = require('../routecontrollers/Product.controll');
const router=express.Router();
router.get('/get-products',get_products);
router.post('/add-products',add_product);
router.delete('/detlete-products/:id',delete_products);
router.put('/update-products/:id',edit_products);

module.exports=router