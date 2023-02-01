import express from 'express';

//imported controllers
import { addSkills, getSkills } from '../controllers/skillController/skills.js';

//imported security middleware
import { protect } from '../middleware/authMiddleware.js';

//routes
const router = express.Router();

router.route('/').get(protect, getSkills).post(protect, addSkills);

export default router;
