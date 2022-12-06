import express from 'express';
import { getUsers } from '../controllers/userController';
//import security middleware

const router = express.Router();

router.route('/').get(getUsers);

export default router;
