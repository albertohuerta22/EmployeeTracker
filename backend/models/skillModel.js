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

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
