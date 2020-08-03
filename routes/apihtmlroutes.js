// Dependencies
// =============================================================
var path = require("path");

const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//When request, do something
router.put("/api/workouts/:id", (req, res) => {
  // console.log("IN THE PUT"+ req.body);
  Workout.findByIdAndUpdate(req.params.id,  {$push:{exercises:req.body} }, 
                            function (err, workoutobj) { 
    if (err){ 
        console.log(err) 
    } 
    else{ 
        console.log("Updated workout"); 
        res.json(workoutobj)
    } 
}); 

});


router.post("/api/workouts", ({ body }, res) => {
  console.log(body);
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
