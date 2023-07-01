const mongoose = require('mongoose');
const db = require('../../storage/db');

const { url, options } = require('../../config/db');

const init = () => {
    mongoose.connect(url, options);

    db.on('error', (err) => {
      console.log('DB err: ', err);
    })

    db.once('open', () => { 
        console.log('Connected to DB');
    })
}

module.exports = init; 
