const router = require('express').Router();
const responseRoutes = require('./responseRoutes');
const backupRoutes = require('./backupRoutes');

router.use('/clients', responseRoutes);
router.use('/backup', backupRoutes);

module.exports = router;