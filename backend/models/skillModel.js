import mongoose, { Schema } from 'mongoose';

// const skillSchema = mongoose.Schema({
//   // GUID FIELD
//   name: {
//     type: String,
//     unique: true, //will protect my filter
//     // required: true,
//   },
//   description: {
//     type: String,
//     // required: true,
//   },
//   employee: { //1:1
//     type: Schema.Types.ObjectId,
//     ref: 'Employee',
//   },
// });
const skillSchema = mongoose.Schema({
  // GUID FIELD
  name: {
    type: String,
    enum: ['Python', 'Scala', 'Java'],
    // unique: true, //will protect my filter
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  // status: {
  //   type: Number,
  //   // enum: [1, 2, 3],
  // },
});

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
