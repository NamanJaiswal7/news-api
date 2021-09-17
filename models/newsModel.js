const mongoose = require('mongoose');
const newsSchema=new mongoose.Schema({
  bookMarked: {
    type: Boolean,
    required:true
},
description: {
    type: String,
    required: true
},  
link:{
  type:String,
  required:true
},
logoImage:{
  type:String,
  required:true
},
productCoverImage:{
  type:String,
  required:true
},
sourceName:{
  type:String,
  required:true
},
time:{
  type:Date,
  default:Date.now()

},
title:{
  type:String,
  required:true
},
type:{
  type:String,
  required:true
}
});
const news = mongoose.model('news', newsSchema);

module.exports = news;