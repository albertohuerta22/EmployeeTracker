import express from 'express';

//imported controllers
import {
  getUsers,
  getSingleUser,
  deleteUser,
  authUser,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

//import security middleware

const router = express.Router();

router.route('/').get(protect, getUsers);
router.route('/:id').get(getSingleUser).delete(deleteUser);
router.route('/login').post(authUser);

export default router;
