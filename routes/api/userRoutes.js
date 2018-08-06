const router = require('express').Router();
const passport = require('passport');
const userController = require('../../controllers/userController');

// ../api/user/login
router
  .route('/login')
  .post(passport.authenticate('local'), function(req, res) {
    console.log(req.user);
    res.json(req.user);
  })
  .get(function(req, res) {
    console.log(req.user);
    if (req.user) {
      res.json({isLoggedIn: true, username: req.user.username});
    } else {
      res.json(false);
    }
  });

// ../api/user/logout
router
  .route('/logout')
  .get(function(req,res) {
    req.logout()
    console.log(req.user);
    res.json(false);
  })

// ../api/user/:id
router
  .route('/:id')
  .get(userController.findByUserName)
  .put(userController.update)
  .delete(userController.remove);

// ..api/user/register
router
  .route('/register')
  .post(userController.register);


module.exports = router;
