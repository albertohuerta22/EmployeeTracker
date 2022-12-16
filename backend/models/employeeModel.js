import mongoose from 'mongoose';

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
  skills: [
    // skillSchema,
    // ** not sure why this did not work
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Skills',
    },
  ],
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
