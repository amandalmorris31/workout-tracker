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
  console.log("IN THE PUT"+ req.body);
  Workout.findByIdAndUpdate(req.params.id,  {$push:{exercises:req.body} }, 
                            function (err, workoutobj) { 
    if (err){ 
        console.log(err) 
    } 
    else{ 
        console.log("Updated workout "); 
        res.json(workoutobj)
    } 
}); 
  // const newWorkout = { 
  //   exercises: [ req.body ]
  // }
  // Workout.create(newWorkout)
  //   .then(dbWorkout => {
  //     res.json(dbWorkout);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});


//need to complete this POST
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




// app.put("/api/images/:id", function(req, res) {
//   db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
//     res.json(dbImage);
//   });
// });



module.exports = router;
