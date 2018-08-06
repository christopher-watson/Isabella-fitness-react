const router = require('express').Router();
const responseRoutes = require('./responseRoutes');
const backupRoutes = require('./backupRoutes');
const emailRoutes = require('../../nodemailer/Email');
const userRoutes = require('./userRoutes');

router.use('/clients', responseRoutes);
router.use('/backup', backupRoutes);
router.use('/mail', emailRoutes);
router.use('/user', userRoutes);

module.exports = router;