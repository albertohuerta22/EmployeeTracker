// import { query } from 'express';
import asyncHandler from 'express-async-handler';
import Employee from '../models/employeeModel.js';
import Skill from '../models/skillModel.js';

//description: GET ALL EMPLOYEES
//route: GET /api/employees
//access: public

const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({})
    .populate({
      path: 'Skills',
      select: 'name',
      strictPopulate: false,
    })
    .exec();
  // .exec((err, employee) => {
  //   if (err) return handleError(err);
  //   console.log(employee);
  // });

  res.json(employees);
});
//description: GET ALL EMPLOYEES
//route: GET /api/employees
//access: public

const getAllEmployees = asyncHandler(async (req, res) => {
  try {
    const employees = await Employee.find().populate({
      path: 'Skill',
      populate: {
        path: 'skills',
        // model: 'Skill',
      },
      strictPopulate: false,
      select: 'name description',
    });
    res.status(200).send({ employees: [...employees], success: true });

    res.json(employees);
  } catch (error) {
    console.log(error);
    res.status(404).send({ success: false, msg: error.message });
  }
});
//description: GET EMPLOYEE
//route: GET /api/employees/:id
//access: public

const getSingleEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  res.json(employee);
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
    skills: [],
  });

  const skills = await Skill.create({
    name: 'python',
    description: 'high',
    employee: employee._id,
  });

  await employee.skills.push(skills);

  const createdEmployee = await employee.save();
  res.status(201).json(createdEmployee);
});

//description: UPDATE employee
//route: PUT /api/employees/:id
//access private
const updateEmployee = asyncHandler(async (req, res) => {
  const { firstName, lastName, dob, email, active, age, skills } = req.body;

  const employee = await Employee.findById(req.params.id);

  if (employee) {
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.dob = dob;
    employee.email = email;
    employee.active = active;
    employee.age = age;
    employee.skills = skills;

    const updatedEmployee = await employee.save();
    res.json(updatedEmployee);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

//description Delete a product
//route: DELETE /api/employees
//access: private

const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (employee) {
    await employee.remove();
    res.json({ message: 'Employee removed' });
  } else {
    res.status(404);
    throw new Error('Employee not found');
  }
});

export {
  getEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployees,
};
