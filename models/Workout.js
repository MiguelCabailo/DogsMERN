const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    workout : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }
})

// parameters: modelName/schema
module.exports = Workout = mongoose.model('workout', WorkoutSchema);