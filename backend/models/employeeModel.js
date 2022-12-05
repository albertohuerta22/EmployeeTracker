import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
  //employee GUID type

  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  skill: {
    type: String, //REF field
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
