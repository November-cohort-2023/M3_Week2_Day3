
const {Schema, model} = require('mongoose')


const actorsSchema = new Schema({
    name:String,
    age:Number,
    movies:[{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }]
})

const Actor = model('Actor',actorsSchema)


module.exports = Actor