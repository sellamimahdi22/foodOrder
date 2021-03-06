const mongoose=require('mongoose')
const Schema= mongoose.Schema
const orders = new Schema({

    customer: {
        type: String,
        required: true,
        maxlength: 60,
      },
      address: {
        type: String,
        required: true,
        maxlength: 200,
      },
      total: {
        type: Number,
        required: true,
      },
      status: {
        type: Number,
        default: 0,
      },
      method: {
        type: Number,
        required:true
      },

},
{timestamps:true}
)
module.exports=mongoose.model("orders",orders)