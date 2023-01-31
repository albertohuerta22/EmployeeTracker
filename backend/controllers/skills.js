import asyncHanlder from 'express-async-handler';
import Skill from '../models/skillModel.js';

//description: Create new Skill
//route: POST /api/skills
//access: PRIVATE

const addSkills = asyncHanlder(async (req, res) => {
  const { name, description } = req.body;

  if (name && description === undefined) {
    res.status(400);
    throw new Error('skills');
  } else {
    const skill = new Skill({
      name,
      description,
      // employee,
    });

    const createdSkill = await skill.save();

    res.status(201).json(createdSkill);
  }
});

const getSkills = asyncHanlder(async (req, res) => {
  const skills = await Skill.find({});
  if (skills) {
    res.json(skills);
  } else {
    res.status(401);
    throw new Error('No Skills found');
  }
});

export { getSkills, addSkills };
