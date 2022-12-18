// return (
//   <>
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>FIRST</th>
//           <th>LAST</th>
//           <th>EMAIL</th>
//           <th>DOB</th>
//           <th>AGE</th>
//           <th>SKILL</th>
//           <th>DESCRIPTION</th>
//           <th>SKILL LVL</th>
//           <th>ACTIVE</th>
//         </tr>
//       </thead>
//       <tbody>
//         {employees &&
//           employees.map((employee) => (
//             <tr key={employee._id}>
//               <td>{employee._id}</td>
//               <td>{employee.firstName}</td>
//               <td>{employee.lastName}</td>
//               <td>{employee.email}</td>
//               <td>{employee.dob}</td>
//               <td>{employee.age}</td>
//               <td>{employee.skills.map((skill) => skill.name)}</td>
//               <td>{employee.skills.map((skill) => skill.description)}</td>
//               <td>null</td>
//               <td>{employee.active.toString()}</td>
//               <td>
//                 <Button
//                   variant=""
//                   onClick={() => deleteHandler(employee._id)}
//                 >
//                   {/* //download bootstrap for trash icon */}
//                   <i className="fa fa-trash">X</i>
//                 </Button>
//               </td>
//             </tr>
//           ))}
//       </tbody>
//     </Table>
//   </>
// );
