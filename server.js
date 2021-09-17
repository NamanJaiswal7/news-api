const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config({path:'./config.env'});
const app=require('./app');


mongoose.connect(process.env.DATABASE_LOCAL,{
  // useNewUrlParser:true,
  // useCreateIndex:true,
  // useFindAndModify:false
}).then(()=>console.log("Connected database"));
// const newsSchema=new mongoose.Schema({
//   bookMarked: {
//     type: Boolean,
//     required:true
// },
// description: {
//     type: String,
//     required: true
// },
// id: {
//     type: String,
//     required:true
// },
// link:{
//   type:String,
//   required:true
// },
// logoimage:{
//   type:String,
//   required:true
// },
// productcoverimage:{
//   type:String,
//   required:true
// },
// sourcename:{
//   type:String,
//   required:true
// },
// time:{
//   type:String,

// },
// title:{
//   type:String,
//   required:true
// }
// });
// const News=mongoose.model('News',newsSchema)

const port=process.env.PORT||8000;
app.listen(port,()=>{
  console.log("App running");
})