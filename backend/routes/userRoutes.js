import express from 'express';

//imported controllers
import { getUsers } from '../controllers/userController.js';

//import security middleware

const router = express.Router();

router.route('/').get(getUsers);

export default router;
