import express from 'express';

//imported controllers
import { getEmployees } from '../controllers/employeeController.js';

//imported security middleware

const router = express.Router();

router.route('/').get(getEmployees);

export default router;
