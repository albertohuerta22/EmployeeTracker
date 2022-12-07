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
  skillLevel: {
    type: mongoose.Schema.Types.ObjectId, //REF field
    required: false,
    ref: 'Skill',
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
