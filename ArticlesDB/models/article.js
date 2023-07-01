const mongoose = require('mongoose');
const path = require('path');

const { Schema } = mongoose;

const articleSchema = new Schema({
     title: {
         type: Schema.Types.String,
         default: '',
         unique: true,
         maxLength: 255
     },
     text: {
         type: Schema.Types.String,
         default: ''
     }
})

const modelname = path.basename(__filename, '.js');

const model = mongoose.model(modelname, articleSchema);

module.exports = model;
