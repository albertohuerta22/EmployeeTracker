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
  employee: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
  },
});

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
