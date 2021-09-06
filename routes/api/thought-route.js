const router = require('express').Router();
const {
    getAllThoughts,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');


router.route('/').post(addThought)
router.route('/').get(getAllThoughts);

router
    
  .route('/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

router.route('/:thoughtId/:reactionId').delete(removeReaction, addReaction);

module.exports = router;
