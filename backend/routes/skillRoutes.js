import express from 'express';

//imported controllers
import { addSkills, getSkills } from '../controllers/skills.js';

//imported security middleware

//routes
const router = express.Router();

router.route('/').get(getSkills).post(addSkills);

export default router;
