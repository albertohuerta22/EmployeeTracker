import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

//imported routes
import userRoutes from './routes/userRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import skillRoutes from './routes/skillRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

//mount routes
app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/skills', skillRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5050;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
