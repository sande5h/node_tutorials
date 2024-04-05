const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name : {
        type:String,
        required:[true , ' Name is required'],
        trim : true ,
        maxlength : [40 , 'name cannot be large than 40 characters'],

    },
    completed:{
        type:Boolean,
        default:false,

    },

    

})

module.exports = mongoose.model('Task',TaskSchema)