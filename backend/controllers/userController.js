import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../util/generateToken.js';

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

//description: Auth user & assign token
//route: Post /api/users/login
//access Public
const authUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  //looks for user with exact username
  const user = await User.findOne({ username: username });

  //if there is a user and matching password return json + token
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid username or password');
  }
});

export { getUsers, getSingleUser, deleteUser, authUser };
