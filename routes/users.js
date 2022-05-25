const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  userValidation,
} = require('../middlewares/validationJoi');

const {
  updateUserInfo,
  getUser,
} = require('../controllers/users');

router.get('/me', auth, getUser);
router.patch('/me', auth, userValidation, updateUserInfo);

module.exports = router;
