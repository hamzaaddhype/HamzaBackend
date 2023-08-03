const mongoose = require('mongoose');
const productsSchema= new mongoose.Schema({
    product_title:{
        type: String,
        required: true
    },
    product_id:{
        type: Number,
        required: true
    },
    product_dis:{
        type:String,
        required: true
    },
    product_points:{
        type:String,
        required: true
    },
})


const Products= mongoose.model('products',productsSchema)
module.exports = Products