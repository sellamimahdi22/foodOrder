const Order=require('../models/Order')


exports.create_order=async(req,res)=>{
    try {
        
        const order = await Order.create(req.body);
        res.status(201).json(order);
      } catch (err) {
        res.status(500).json(err);   
    }
}
exports.get_orders=async(req,res)=>{
  try {
    const orders= await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err); }
}
exports.get_oneorder=async(req,res)=>{
  try {
    const orders= await Order.findById(_id);
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err); }
}