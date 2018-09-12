const express = require('express');

// complete middleware and routing system
const router = express.Router();

const Workout = require('../../models/Workout');

// @route GET api/items
// @desc GET all items
// @access Public
router.get('/', (req, res) => {
    Workout.find()
        .sort({ date: -1 })
        .then(workout => res.json(workout))
})

router.post('/', (req, res) => {
    // new item saved in memory
    const newWorkout = new Workout({
        workout: req.body.workout
    })

    // save to database
    newWorkout.save().then(workout => res.json(workout));
})

router.delete('/:id', (req, res) => {
    Workout.findById(req.params.id)
        .then((workout) => workout.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
