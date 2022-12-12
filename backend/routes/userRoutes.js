import express from 'express';

//imported controllers
import {
  getUsers,
  getSingleUser,
  deleteUser,
  authUser,
} from '../controllers/userController.js';

//import security middleware

const router = express.Router();

router.route('/').get(getUsers);
router.route('/:id').get(getSingleUser).delete(deleteUser);
router.route('/login').post(authUser);

export default router;
