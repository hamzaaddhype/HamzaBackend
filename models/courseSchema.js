const mongoose = require('mongoose');
const courseSchema= new mongoose.Schema({
    course_name:{
        type: String,
        required: true
    },
    course_id:{
        type: Number,
        required: true
    },
    course_dis:{
        type:String,
        required: true
    },
    course_points:{
        type:Number,
        required: true
    },
    course_status:{
        type:Boolean,
        default:false,
        required: true
    },
    course_duration:{
        type:String,
        required: true
    }
})


const Course= mongoose.model('cources',courseSchema)
module.exports = Course