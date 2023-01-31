import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';

//imported sample data
import users from './data/users.js';
import employees from './data/employees.js';
import skills from './data/skills.js';
// imported models
import User from './models/userModel.js';
import Skill from './models/skillModel.js';
import Employee from './models/employeeModel.js';

//connect to db
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Employee.deleteMany();
    await Skill.deleteMany();

    await User.insertMany(users);
    await Employee.insertMany(employees);
    await Skill.insertMany(skills);

    // const adminUser = createdUsers[0]._id;

    console.log('Data Imported!');
  } catch (error) {
    console.error(`${error}`);
    process.exit(1); //node error UFE
  }
};
const destroyData = async () => {
  try {
    await User.deleteMany();
    await Employee.deleteMany();
    await Skill.deleteMany();

    console.log('Data Destroyed!');
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  // if -d after npm script call then
  destroyData(); //delete data
} else {
  importData(); // import data
}
