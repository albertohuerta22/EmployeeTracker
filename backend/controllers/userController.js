import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//description: GET ALL USERS
//route: GET /api/users
//access: private/admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  res.json(users);
});

export { getUsers };
