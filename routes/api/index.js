const router = require('express').Router();
const responseRoutes = require('./responseRoutes');
const backupRoutes = require('./backupRoutes');
const emailRoutes = require('../../nodemailer/Email');

router.use('/clients', responseRoutes);
router.use('/backup', backupRoutes);
router.use('/mail', emailRoutes);

module.exports = router;