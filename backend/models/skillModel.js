import mongoose, { Schema } from 'mongoose';

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
  emplyee: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
  },
});

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
