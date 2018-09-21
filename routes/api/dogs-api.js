const express = require('express');

// complete middleware and routing system
const router = express.Router();

const DogModel = require('../../models/DogModel');

// @route GET api/items
// @desc GET all items
// @access Public
router.get('/', (req, res) => {
    DogModel.find()
        .sort({ date: -1 })
        .then(dog => res.json(dog))
})

router.post('/', (req, res) => {
    console.log(req.body);
    // new item saved in memory
    
    
    const newDog = new DogModel({
        breed: req.body.breed,
        color: req.body.color,
        age: req.body.age
    })

    // save to database
    newDog.save().then(dog => res.json(dog));
    
})

router.delete('/:id', (req, res) => {
    DogModel.findById(req.params.id)
        .then((dog) => dog.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
