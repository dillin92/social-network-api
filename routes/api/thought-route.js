const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');


router.route('/').post(addThought)
router.route('/').get(getAllThoughts);

router
    
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router.route('/:id/:reactionId') .put(addReaction).delete(removeReaction, addReaction);

module.exports = router;
