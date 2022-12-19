import asyncHanlder from 'express-async-handler';
import Skill from '../models/skillModel.js';

//description: Create new Skill
//route: POST /api/skills
//access: PRIVATE

const addSkills = asyncHanlder(async (req, res) => {
  const { name, description, employee } = req.body;

  if (name && description === undefined) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const skill = new Skill({
      name,
      description,
      employee,
    });

    const createdSkill = await skill.save();

    res.status(201).json(createdSkill);
  }
});

const getSkills = asyncHanlder(async (req, res) => {
  const skills = await Skill.find({});
  res.json(skills);
});

export { getSkills, addSkills };
