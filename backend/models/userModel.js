import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
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

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
