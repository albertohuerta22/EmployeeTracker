import asyncHandler from 'express-async-handler';
import Employee from '../models/employeeModel.js';

//description: GET ALL EMPLOYEES
//route: GET /api/employees
//access: public

const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});

  res.json(employees);
});

//description: CREATE employee
//route: POST /api/employees
//access: private
const createEmployee = asyncHandler(async (req, res) => {
  const employee = new Employee({
    firstName: 'Cody',
    lastName: 'Smith',
    dob: '01-01-01',
    email: 'codysmith@email.com',
    active: true,
    age: 21,
  });

  const createdEmployee = await employee.save();
  res.status(201).json(createdEmployee);
});

export { getEmployees, createEmployee };
