import React, { useEffect } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
// import { Table, Button, Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
// import overlayFactory from 'react-bootstrap-table2-overlay';

//imported components
import NewEmployeeForm from '../components/NewEmployeeForm.js';

//imported actions
import {
  listEmployees,
  deleteEmployee,
  updateEmployee,
} from '../action/employeeAction.js';

const ListScreen = () => {
  const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  const employeeList = useSelector((state) => state.employeeList);
  const { employees } = employeeList;

  // const skillList = useSelector((state) => state.skillList);
  // const { skills } = skillList;

  //if not logged in protect middleware will prevent screen
  useEffect(() => {
    dispatch(listEmployees());
  }, [dispatch, listEmployees]);

  const deleteHandler = (id) => {
    // fail safe
    if (window.confirm('Are you sure')) {
      dispatch(deleteEmployee(id));
    }
  };

  const saveHandler = (row) => {
    // console.log(row);
    dispatch(updateEmployee(row));
  };

  const columns = [
    { dataField: '_id', text: 'ID', editable: false },
    { dataField: 'firstName', text: 'First Name' },
    { dataField: 'lastName', text: 'Last Name' },
    { dataField: 'email', text: 'Email' },
    { dataField: 'dob', text: 'DOB' },
    { dataField: 'age', text: 'AGE' },
    { dataField: 'skills', text: 'Skill-ID', editable: false },
    { dataField: 'active', text: 'Active' },
    {
      dataField: 'save',
      text: 'Save',
      // formatter: (cellContent, row) => {
      //   // console.log(row);
      //   return (
      //     <button
      //       onClick={
      //         () =>
      //           saveHandler({
      //             id: row._id,
      //             firstName: row.firstName,
      //             lastName: row.lastName,
      //             email: row.email,
      //             dob: row.dob,
      //             age: row.age,
      //             skills: row.skills,
      //             active: row.active,
      //           })

      //         // saveHandler(row.email)
      //         // row.active()
      //       }
      //     >
      //       Save
      //     </button>
      //   );
      // },
      editable: false,
    },
    {
      dataField: 'remove',
      text: 'Delete',
      formatter: (cellContent, row) => {
        return <button onClick={() => deleteHandler(row._id)}>Delete</button>;
      },
      editable: false,
    },
  ];

  const cellEdit = cellEditFactory({
    mode: 'dbclick',
    blurToSave: true,
    afterSaveCell: (oldValue, newValue, row, column) => {
      return saveHandler(row);
    },
  });

  return (
    <>
      <BootstrapTable
        keyField="_id"
        data={employees}
        columns={columns}
        cellEdit={cellEdit}
        striped
        hover
      />
      <NewEmployeeForm />
    </>
  );
};

export default ListScreen;
