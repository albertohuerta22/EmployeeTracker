import express from 'express';

//imported controllers
import {
  getEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployees,
} from '../controllers/employeeController.js';
import { protect } from '../middleware/authMiddleware.js';

//imported security middleware

const router = express.Router();

//  /api/employees
router
  .route('/')
  .get(protect, getEmployees)
  .post(createEmployee)
  .put(updateEmployee);

// /api/employees/:id
router
  .route('/:id')
  .get(protect, getSingleEmployee)

  .delete(deleteEmployee);
export default router;
