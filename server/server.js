var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {users} = require('./models/users');

var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.post('/todos',(req,res) => {
  var newToDo=new Todo({
   text: req.body.text
  });
  newToDo.save().then((doc) => {
   res.send(doc) 
  },(e) => {
    res.status(400).send(e)
  })
})
app.get('/todos',(req,res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  },(e) => {
    res.status(400).send(e);
  });
});

app.listen(port,() => {
  console.log('server is connected on  port',port);
});
module.exports={app};







