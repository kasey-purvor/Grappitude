const router = require('express').Router();
let Thought = require('../models/thought.model');

router.route('/').get((req, res) => {
  Thought.find()
    .then(thoughts => res.json(thoughts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const thought = req.body.thought;

  const newThought = new Thought({
    thought,
  });
  newThought.save()
    .then(() => res.json('Thought Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
