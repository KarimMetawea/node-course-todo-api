// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  var db=database.db('todoapp');
  var collections=db.collection('todos');

  collections.insertOne({
    text: 'hey thre',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
  
    console.log(JSON.stringify(result.ops, undefined, 2));
   
  });
  database.close();
});