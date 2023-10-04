const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({   
    itemId:{
        type:Number,
        required:true
    },   
    itemName:{
        type:String,
        required:true
    },
    quentity:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('items', itemSchema);