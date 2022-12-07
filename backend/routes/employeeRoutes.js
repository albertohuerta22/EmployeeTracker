import express from 'express';

//imported controllers
import {
  getEmployees,
  createEmployee,
} from '../controllers/employeeController.js';

//imported security middleware

const router = express.Router();

router.route('/').get(getEmployees).post(createEmployee);

export default router;
