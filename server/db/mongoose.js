var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://karimMetawea:karim1961993@ds155730.mlab.com:55730/todo-api' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
