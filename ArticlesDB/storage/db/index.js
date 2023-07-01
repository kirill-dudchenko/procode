const mongoose = require('mongoose');

//mongoose.plugin ...

const db = mongoose.connection;

module.exports = db;
