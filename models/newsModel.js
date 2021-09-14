const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');

const newsSchema=new mongoose.Schema({
  bookMarked: {
    type: Boolean,
    required:true
},
description: {
    type: String,
    required: true
},
id: {
    type: String,
    required:true
},
link:{
  type:String,
  required:true
},
logoimage:{
  type:String,
  required:true
},
productcoverimage:{
  type:String,
  required:true
},
sourcename:{
  type:String,
  required:true
},
time:{
  type:String,

},
title:{
  type:String,
  required:true
}
});



const news=mongoose.model('newsSchema', 
               new Schema({ bookMarked: Boolean, description: String, id: String,link:String,logoImage:String,productCoverImage:String,sourceName:String,time:String,title:String,type:String}), 
               process.env.COLLECTION_NAME); 

module.exports = news;