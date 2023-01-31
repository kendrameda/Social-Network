const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
} = require('../../controllers/UserController');

router.route('/').get(getUsers).post(createUser);

router.route('/:UserId').get(getSingleUser).delete(deleteUser);



module.exports = router;
