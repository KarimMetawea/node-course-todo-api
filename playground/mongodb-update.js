// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  var db=database.db('todoapp');
  var collections=db.collection('users');

  collections.findOneAndUpdate({
    _id:new ObjectID('5b1c3e1bbfd1661be075fbd9')
},{
  $set:{
  name: 'mohamed'
  },
  $inc:{
    age: 1
  }
},{
  returnOriginal: false
}).then((result) => {
  console.log(result);
});
   
  });
  // collections.insertOne({
  //   name : 'karim',
  //   age : 25
  // },(err,result) => {
  //   if (err) {
  //     return console.log('unable to insert user');
  //   }
  //   console.log('inserted success');
  // // });
  // database.close();
// });