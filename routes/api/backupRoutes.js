const router = require('express').Router();
const backupController = require('../../controllers/backupController');

// ../api/clients
router
  .route("/")
  .get(backupController.findAll)
  .post(backupController.create);

// ../api/clients/:id
router
  .route("/:id")
  .get(backupController.findById)
  .put(backupController.update)
  .delete(backupController.remove);

module.exports = router;
