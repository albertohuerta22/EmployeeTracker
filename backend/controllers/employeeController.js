import asyncHandler from 'express-async-handler';
import Employee from '../models/employeeModel.js';

//description: GET ALL EMPLOYEES
//route: GET /api/employees
//access: public

const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});

  res.json(employees);
});

export { getEmployees };
