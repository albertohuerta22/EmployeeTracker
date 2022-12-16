import express from 'express';

//imported controllers
import { addSkills } from '../controllers/skills.js';

//imported security middleware

//routes
const router = express.Router();

router.route('/').post(addSkills);

export default router;
