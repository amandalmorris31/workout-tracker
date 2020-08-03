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

workoutSchema.methods.totalWeight = function(cb) {
  return mongoose.model('Workout').find({ type: this.type }, cb);
}

// workoutSchema.methods.create = function(body) {
//   console.log("create Body", body);
// };

// Workout.create({ size: 'small' }, function (err, small) {
//   if (err) return handleError(err);
//   // saved!
// });



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;