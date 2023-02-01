// import { query } from 'express';
import asyncHandler from 'express-async-handler';
import Employee from '../../models/employeeModel.js';
import Skill from '../../models/skillModel.js';

//description: GET ALL EMPLOYEES
//route: GET /api/employees
//access: public

const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});
  res.json(employees);
});

//description: GET EMPLOYEE
//route: GET /api/employees/:id
//access: public
const getSingleEmployee = asyncHandler(async (req, res) => {
  // console.log(req.params.id);
  const employee = await Employee.findById(req.params.id);

  return res.json(employee);
});

//description: CREATE employee
//route: POST /api/employees
//access: private
const createEmployee = asyncHandler(async (req, res) => {
  const { firstName, lastName, dob, email, active, age, skill, description } =
    req.body;

  let employeeExist = await Employee.findOne({ email: email });

  if (employeeExist) {
    return res.status(401).send('Employee already exist');
    // throw new Error('Employee already exist');
  }

  const employee = await Employee.create({
    firstName,
    lastName,
    dob,
    email,
    active,
    age,
    description,
  });

  if (employee && skill) {
    let skillObj = await Skill.findOne({ skill }); // this matches one skill name

    if (skillObj.name === 'Scala') {
      // employee.skills = 1;
      employee.skills = skill;
      // employee.description = description;
    }
    if (skillObj.name === 'Python') {
      employee.skills = skill;
    }
    if (skillObj.name === 'Java') {
      employee.skills = skill;
    }
    await employee.save();
    return res.json(employee);
  } else {
    res.status(401).send('Invalid user data');
    throw new Error('Invalid user data');
  }
});

//description: UPDATE employee
//route: PUT /api/employees/:id
//access private
const updateEmployee = asyncHandler(async (req, res) => {
  const {
    _id,
    firstName,
    lastName,
    email,
    dob,
    age,
    active,
    skillName,
    description,
  } = req.body;
  // console.log(email);

  let employee = await Employee.findOne({ email }, _id); // extracts the employee id based on email

  // let employeeID = _id;

  if (employee) {
    // console.log(employee);
    // employee.id = _id;
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.email = email;
    employee.dob = dob;
    employee.age = age;
    employee.skills = skillName;
    employee.active = active;
    employee.description = description;

    const updatedEmployee = await employee.save();

    res.json(updatedEmployee);
  } else {
    res.status(401);
    throw new Error('Employee not found');
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
    res.status(401);
    throw new Error('Employee not found');
  }
});

export {
  getEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  // getAllEmployees,
};
