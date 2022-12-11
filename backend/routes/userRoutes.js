import express from 'express';

//imported controllers
import { getUsers, getSingleUser } from '../controllers/userController.js';

//import security middleware

const router = express.Router();

router.route('/').get(getUsers);
router.route('/:id').get(getSingleUser);

export default router;
