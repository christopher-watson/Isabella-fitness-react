const router = require('express').Router();
const backupController = require('../../controllers/backupController');

// ../api/backup
router
  .route("/")
  .get(backupController.findAll)
  .post(backupController.create);

// ../api/backup/:id
// router
//   .route("/:id")
//   .get(backupController.findById)
//   .put(backupController.update)
//   .delete(backupController.remove);

module.exports = router;
