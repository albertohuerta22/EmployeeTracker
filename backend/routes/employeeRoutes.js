import express from 'express';

//imported controllers
import {
  getEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employeeController.js';
import { protect } from '../middleware/authMiddleware.js';

//imported security middleware

const router = express.Router();

//  /api/employees
router.route('/').get(protect, getEmployees).post(createEmployee);

// /api/employees/:id
router
  .route('/:id')
  .get(protect, getSingleEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);
export default router;
