import mongoose from 'mongoose';
// import Skill from './skillModel';

const skillSchema = mongoose.Schema({
  // GUID FIELD
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const employeeSchema = mongoose.Schema({
  //employee GUID type

  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    // required: true,
  },
  dob: {
    type: Date,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  //1:Many
  skills:
    // // { type: String },
    // [
    //   // skillSchema,
    //   // ** not sure why this did not work
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'Skill',
    //   },
    // ],
    { type: String },
  active: {
    type: Boolean,
    // required: true,
  },
  age: {
    type: Number,
    // required: true,
  },
  description: {
    type: String,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
