import express from 'express';

//imported controllers
import {
  getEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employeeController.js';

//imported security middleware

const router = express.Router();

//  /api/employees
router.route('/').get(getEmployees).post(createEmployee);

// /api/employees/:id
router
  .route('/:id')
  .get(getSingleEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);
export default router;
