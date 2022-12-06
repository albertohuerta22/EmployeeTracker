import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin Shane',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Admin Cody',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Admin John',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
];

export default users;
