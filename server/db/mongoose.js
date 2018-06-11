var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('MONGODB_URI');
mongoose.connection.once('open',() => {
    console.log('connected to the data base');
});

module.exports = {mongoose};
