const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises:[ 
 {
    type: {
        type: String,
        trim: true,
        required: "Enter workout type"
      },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for exercise name"
      },
    duration: {
        type: String,
        trim: true,
        required: "Enter a name for duration"
      },
    weight: {
        type: Number,
        trim: true,
      },
    reps: {
        type: Number,
        trim: true,
      },
    sets: {
        type: Number,
        trim: true,
      },
    distance: {
        type: String,
        trim: true,
      },
  }
],

  day: {
    type: Date,
    default: Date.now
  }
});

//custom methods totalWeight, totalSets, totalReps, totalDistance, totalDuration

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;