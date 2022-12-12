import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  //jwt_secret placed in .env to protect: https://www.npmjs.com/package/jsonwebtoken
  return jwt.sign({ id }, `${process.env.JWT_SECRET}`, {
    // can use backdate method using math.floor(date.now() / 100) - 30
    expiresIn: '30d',
  });
};

export default generateToken;
