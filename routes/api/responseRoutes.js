const router = require('express').Router();
const responseController = require('../../controllers/responseController');

// ../api/clients
router
  .route("/")
  .get(responseController.findAll)
  .post(responseController.create)

// ../api/clients/:id
router
  .route("/:id")
  .get(responseController.findById)
  .put(responseController.update)
  .delete(responseController.remove);

module.exports = router;

