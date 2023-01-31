// //description: CREATE employee
// //route: POST /api/employees
// //access: private
// const createEmployee = asyncHandler(async (req, res) => {
//   const { firstName, lastName, dob, email, active, age, skill, description } =
//     req.body;

//   const employeeExist = await Employee.findOne({ email: email });

//   if (employeeExist) {
//     res.status(401).send('Employee already exist');
//     // throw new Error('Employee already exist');
//   }

//   const employee = await Employee.create({
//     firstName,
//     lastName,
//     dob,
//     email,
//     active,
//     age,
//   });

//   if (employee && skill) {
//     const newSkill = await Skill.create({
//       name: skill,
//       description: description,
//       employee: employee._id,
//     });
//     const savedSkill = await newSkill.save();

//     // employee.skills = [
//     //   Skill.populate({
//     //     path: 'Skill',
//     //     strictPopulate: false,
//     //     select: 'name description',
//     //   }),
//     // ];
//     // console.log(employee);
//   }

//   if (employee && skill) {
//     res.status(201).json({
//       _id: employee._id,
//       firstName: employee.firstName,
//       lastName: employee.lastName,
//       email: employee.email,
//       dob: employee.dob,
//       age: employee.age,
//       active: employee.active,
//     });
//   } else {
//     res.status(401);
//     throw new Error('Invalid user data');
//   }
// });

// const updateEmployee = asyncHandler(async (req, res) => {
//     const {
//       _id,
//       firstName,
//       lastName,
//       email,
//       dob,
//       age,
//       active,
//       skillName,
//       description,
//     } = req.body;
//     // console.log(email);

//     let employee = await Employee.findOne({ email }, _id); // extracts the employee id based on email
//     // console.log('employeeID: ', employee); // this works
//     // let employee = await Employee.findById(employeeID);
//     // console.log(employee);
//     let employeeID = _id;

//     if (employee) {
//       // console.log(employee);
//       // employee.id = _id;
//       employee.firstName = firstName;
//       employee.lastName = lastName;
//       employee.email = email;
//       employee.dob = dob;
//       employee.age = age;
//       employee.skills = skillName;
//       employee.active = active;
//       employee.description = description;

//       //trying to update skills if given -> employee skills ref skills table

//       //skill filter needs to exist
//       //new employee cannot have same name
//       //no same employee and skill combo

//       //foreign key 1:1 relationship

//       // const skillsID = await Skill.find({ employeeID });
//       // // console.log('skills ID: ', skillsID);
//       // let skillObj = await Skill.findById(skillsID);
//       // console.log(skillObj);
//       // if (skillObj) {
//       //   (skillObj.skillName = skillName), (skillObj.description = description);
//       //   console.log('this fires');
//       //   await skillObj.save();
//       // }

//       // if (skillObj === null) { // DONT NEED TO CREATE NEW SKILL
//       //   //if no obj
//       //   Skill.create({
//       //     name: skillName,
//       //     description: description,
//       //     employee: employee,
//       //   });
//       // }

//       // employee.skills.push(Object.values(skills));

//       // if (employee && skills) {
//       //   res.status(201).json({
//       //     _id: employee._id,
//       //     firstName: employee.firstName,
//       //     lastName: employee.lastName,
//       //     email: employee.email,
//       //     dob: employee.dob,
//       //     age: employee.age,
//       //     active: employee.active,
//       //   });
//       // }
//       const updatedEmployee = await employee.save();

//       res.json(updatedEmployee);
//     } else {
//       res.status(401);
//       throw new Error('Employee not found');
//     }
//   });

//description: GET ALL EMPLOYEES
//route: GET /api/employees
//access: public

// const getAllEmployees = asyncHandler(async (req, res) => {
//     try {
//       const employees = await Employee.find()
//         .populate({
//           path: 'Skill',
//           populate: {
//             path: 'skills',
//             // model: 'Skill',
//           },
//           strictPopulate: false,
//           select: 'name description',
//         })
//         .exec();
//       res.status(200).send({ employees: [...employees], success: true });

//       res.json(employees);
//     } catch (error) {
//       console.log(error);
//       res.status(404).send({ success: false, msg: error.message });
//     }
//   });
