// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  var db=database.db('todoapp');
  var collections=db.collection('todos');
    collections.findOneAndDelete({text: 'Something to do'}).then((docs) => {
     
      console.log(JSON.stringify(docs,undefined,2));   
  });
});