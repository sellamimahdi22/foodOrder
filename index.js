const express=require('express');
const connect=require('./config/connect')
const products=require('./routes/Products')
const orders=require('./routes/Order')
const app=express();
app.use (express.json())
connect()
app.use('/products',products)
app.use('/order',orders)
app.listen(5000,(err)=> err?console.error(err):console.log("server running on port 5000"))