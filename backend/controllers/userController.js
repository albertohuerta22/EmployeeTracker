import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//description: GET ALL USERS
//route: GET /api/users
//access: private/admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  res.json(users);
});

//description: GET SINGLE User
//route: GET /api/users/:id
//access: private/admin
const getSingleUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//description: DELETE user
//route: DELETE /api/users/:id
//access: private/admin ->protected by admin middlware
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error({ message: 'User not found' });
  }
});

export { getUsers, getSingleUser, deleteUser };
