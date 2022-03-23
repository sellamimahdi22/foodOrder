const mongoose=require('mongoose')
const Schema= mongoose.Schema
const products = new Schema({
    title:{
        type:String,
        required:true,
    maxlength:50,
    },
    desc:{
        type:String,
        required:true,
        maxlength:50,
    },
    img:{
        type:String,
        required:true,

    }   ,
    prices:{
        type:[Number],
        required:true,

    },
    extraOptions:{
        type:[
            {
                text:{
                    type:String,
                    required:true
                },
                price:{
                    type:Number,required:true
                },
            },
        ],
    },
},
{timestamps:true}
)
module.exports=mongoose.model("products",products)