
const mongoose = require('mongoose')


const directorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    movies: [{
        type:mongoose.Schema.Types.ObjectId,
        // ref is the key to link my object id with another collection
        ref:'Movie'
    }]
})


const Director = mongoose.model('Director',directorSchema)


module.exports = Director