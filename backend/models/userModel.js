import mongoose from 'mongoose';
//possibly import bcrypt
const userSchema = mongoose.Schema({
  username: {
    //NEEDS GUID FIELD
    type: String,
    required: true,
  },
  password: {
    type: String, // must be encrypted
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
