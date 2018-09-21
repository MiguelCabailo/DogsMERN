const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    breed : {
        type: String,
        required : true
    },
    color : {
        type: String,
        required : true
    },
    age : {
        type: String,
        required : true
    },
    date : {
        type: Date,
        default: Date.now
    }
})

// parameters: modelName/schema
module.exports = DogModel = mongoose.model('dogModel', DogSchema);