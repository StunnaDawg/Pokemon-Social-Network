const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtsId').get(getSingleThought);

module.exports = router;