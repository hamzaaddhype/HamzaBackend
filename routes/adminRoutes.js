const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Products = require('../models/productSchema');
const Course = require('../models/courseSchema')
const router = express.Router();


router.get('/Admin', (req,res)=>{
    res.send("<h1>Admin Home Page!</h1>");
} );

router.get('/Admin/update-product', (req,res)=>{
    res.send("<h1>Admin Update Page!</h1>");
} );

router.get('/Admin/delete-product', (req,res)=>{
    res.send("<h1>Admin delete Page!</h1>");
} );

// Add product in mongodb collection
router.post('/Admin/add-product', async (req, res) => {
    const { product_title, product_id, product_dis, product_points   } = req.body;
    if (!product_title || !product_dis || !product_points || !product_id) {
      return res.status(422).json({ error: 'Please enter all required fields' });
    }
    try {
      const productExict= await Products.findOne({ product_id : product_id })

      if (productExict) {
        return res.status(422).json({ error: 'Product id already exists' });
      }else{
        const product = new Products({ product_title, product_id, product_dis, product_points });
      
        await product.save();
        res.status(201).json({ message: 'Successfully Product Inserted' });
      }
      
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: 'Something went wrong' });
    };
});

// Add new cources into the mongodb collection 
router.post('/Admin/add-courses', async (req, res) => {
    const { course_name, course_id, course_dis, course_points, course_status, course_duration } = req.body;
    
    // if (!course_name || !course_id || !course_dis || !course_points || !course_status || !course_duration) {
    //     return res.status(422).json({ error: 'Please enter all required fields' });
    // }
    try {
      const courseExict= await Course.findOne({ course_id : course_id })

      if (courseExict) {
        return res.status(422).json({ error: 'This course is already exists' });
      }else{
        const course = new Course({ course_name, course_id, course_dis, course_points, course_status, course_duration });
        await course.save();
        res.status(201).json({ message: 'Successfully Course Created' });
      }
      
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: 'Something went wrong' });
    };
});


module.exports = router

