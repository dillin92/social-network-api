const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  addReaction
} = require('../../controllers/Thought-controller');

// /api/Thoughts/<pizzaId>
router.route('/:pizzaId').post(addThought);

// /api/Thoughts/<pizzaId>/<ThoughtId>
router
  .route('/:pizzaId/:ThoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/Thoughts/<pizzaId>/<ThoughtId>/<ReactionaddReactionId>
router.route('/:pizzaId/:ThoughtId/:ReactionaddReactionId').delete(removeReaction, addReaction);

module.exports = router;
