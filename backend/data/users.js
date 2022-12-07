import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin Shane',
    username: 'adminShane',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Admin Cody',
    username: 'adminCody',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Admin John',
    username: 'adminJohn',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
];

export default users;
