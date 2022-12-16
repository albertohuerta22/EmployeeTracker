import React, { useState, useEffect } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { useNavigate, useParams } from 'react-router-dom';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';

//imported actions
import { listEmployees, deleteEmployee } from '../action/employeeAction';

const ListScreen = () => {
  // const [id, setId] = useState('1');
  const dispatch = useDispatch();

  const employeeList = useSelector((state) => state.employeeList);
  const { loading, error, employees } = employeeList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  // console.log(employees);
  useEffect(() => {
    dispatch(listEmployees());
  }, [dispatch, listEmployees]);

  // fail safe
  // const deleteHandler = (id) => {
  //   // if (window.confirm('Are you sure')) {
  //   //   console.log('deleted: ', id);
  //   // }
  //   dispatch(deleteEmployee(id));
  // };

  //unique id

  let id;
  if (id !== undefined) {
    for (let i = 0; i < employees.length - 0; i++) {
      const employee = employees[i];
      for (let key in employee) {
        id = employee.key;
        console.log(id);
      }
    }
  } else {
    id = '1';
  }

  const columns = [
    { dataField: '_id', text: 'ID' },
    { dataField: 'firstName', text: 'First Name' },
    { dataField: 'lastName', text: 'Last Name' },
    { dataField: 'email', text: 'Email' },
    { dataField: 'dob', text: 'DOB' },
    { dataField: 'age', text: 'AGE' },
    { dataField: 'skills', text: 'Skill-ID' },

    { dataField: 'active', text: 'Active' },
  ];

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
  return (
    <>
      <BootstrapTable keyField={id} data={employees} columns={columns} />
    </>
  );
};

export default ListScreen;
