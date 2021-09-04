var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


function insertingData(obj){

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    if(obj.bookMarked.trim()!=""&&obj.description.trim()!=""&&obj.link.trim()!=""&&obj.logoImage.trim()!=""&&obj.productCoverImage.trim()!=""&&obj.sourceName.trim()!=""&&obj.time.trim()!=""&&obj.title.trim()!=""&&obj.type.trim()!=""){

      dbo.collection("news-feed").insertOne(obj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
  
    }else
    {
      console.log("lease fill the mandatory")
    }
  });


}


function getAllNews(count,pageNumber){
  let  endingIndex=((count*pageNumber)-pageNumber)+1;
  let startingIndex=(count*pageNumber);

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("news-feed").find().limit(startingIndex,endingIndex).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      
      db.close();
    });
  });


}


function update(Inputid,obj){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { id:Inputid }
    if(obj.bookMarked.trim()!=""&&obj.description.trim()!=""&&obj.link.trim()!=""&&obj.logoImage.trim()!=""&&obj.productCoverImage.trim()!=""&&obj.sourceName.trim()!=""&&obj.time.trim()!=""&&obj.title.trim()!=""&&obj.type.trim()!=""){

      let insertingobj={$set:obj}
      dbo.collection("news-feed").updateOne(myquery, insertingobj, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
    
    }else{
      console.log("please fill the mandatory");
    }

  });
   

}


function deletion(inputid){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { id: inputid };
    dbo.collection("news-feed").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  });
}






var ids = "id" + Math.random().toString(16).slice(2)
console.log(ids);
var myobj={
  bookMarked: "true",
description: "jajaj",
id: ids,
link: "ska",
logoImage: "sakhguaeghuge",
productCoverImage: "https://builtsearch-images.s3-ap-southeast-1.amazonaws.com/News/Cover Images/bFHYxafmW1tl6VAVYtDo.jpeg",
sourceName: "The ajwgh",
time: "2021-04-01T00:00:00Z",
title: "faster ",
type: "Normal-hahaha",
}
// insertingData(myobj);
// getAllNews(2,2);
// update("ide2efa794d529c",myobj)
// deletion('ide63e9e0596662')git 