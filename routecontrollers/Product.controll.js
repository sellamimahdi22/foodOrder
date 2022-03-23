const product=require("../models/Products")

exports.get_products=async(req,res)=>{
    try {
const products=await product.find();
res.send(products)        
    } catch (error) {
        res.status(500).json({errors:error.message})
    }
}
exports.add_product=async(req,res)=>{
    const {title,desc,price,img,prices,extraOptions}=req.body
    try {
        const newproduct=  new product({
            title,desc,price,img,prices,extraOptions
        });
        await newproduct.save();
        res.send(newproduct)
    } catch (error) {
        res.status(500).json({errors: error.message});
        // console.log(error);

    }
}
exports.delete_products=async(req,res)=>{
    try {
        const deletedproducts= await product.findByIdAndDelete(req.params.id);
        res.send({msg:`${deletedproducts.title} deleted`})
    } catch (error) {
        // res.status(500).json({errors: error.message});
        console.log(error);
    }
}
exports.edit_products=async(req,res)=>{
    try {
        const editedProduct = await product.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(editedProduct)
    } catch (error) {
        res.status(500).json({errors: error.message});

    }
}