var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {users} = require('./models/users');

var app = express();
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

app.listen(3000,() => {
  console.log('server is connected');
})







