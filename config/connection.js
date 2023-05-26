const { connect, connection } = require('mongoose');

//connects to the database through mongoose

connect('mongodb://127.0.0.1:27017/socialNetwork');

module.exports = connection;
