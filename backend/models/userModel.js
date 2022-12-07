import mongoose from 'mongoose';
//possibly import bcrypt
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    //NEEDS GUID FIELD
    type: String,
    required: true,
  },
  password: {
    type: String, // must be encrypted
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
