import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// import overlayFactory from 'react-bootstrap-table2-overlay';

//imported components
import NewEmployeeForm from '../components/NewEmployeeForm';

//imported actions
import {
  listEmployees,
  deleteEmployee,
  updateEmployee,
} from '../action/employeeAction';
import { listSkills } from '../action/skillsAction';

const AlternateTable = () => {
  const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  const employeeList = useSelector((state) => state.employeeList);
  const { loading, error, employees } = employeeList;

  const skillList = useSelector((state) => state.skillList);
  const { skills } = skillList;
  //   console.log(skills);

  //if not logged in protect middleware will prevent screen
  useEffect(() => {
    // dispatch(listSkills());
    dispatch(listEmployees());
  }, [dispatch, listEmployees]);

  useEffect(() => {
    dispatch(listSkills());
  }, [dispatch, listSkills]);

  const deleteHandler = (id) => {
    // fail safe
    if (window.confirm('Are you sure')) {
      dispatch(deleteEmployee(id));
    }
  };

  const saveHandler = (id) => {
    if (window.confirm('Save?')) {
      console.log('saved');
      //   dispatch(updateEmployee(id));
    }
  };

  const listScreen = (id) => {
    console.log('');
    // navigate = ()
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST</th>
            <th>LAST</th>
            <th>EMAIL</th>
            <th>DOB</th>
            <th>AGE</th>
            <th>SKILL ID</th>
            <th>SKILL Name</th>
            <th>DESCRIPTION</th>
            <th>ACTIVE</th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees.map((employee) => (
              <tr key={employee._id}>
                <td onClick={() => listScreen}>{employee._id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.dob}</td>
                <td>{employee.age}</td>
                <td>{employee.skills}</td>

                <td>
                  {skills.map((skill) => {
                    console.log(skill, employee);
                    if (skill.employee === employee._id) {
                      return skill.name;
                    }
                  })}
                </td>
                <td>
                  {skills.map((skill) => {
                    console.log(skill, employee);
                    if (skill.employee === employee._id) {
                      return skill.description;
                    }
                  })}
                </td>

                <td>{employee.active.toString()}</td>
                <td>
                  <LinkContainer to={`/list/${employee._id}`}>
                    <Button variant="light">
                      {/* //download bootstrap for trash icon */}
                      <i className="fa fa-edit">Edit</i>
                    </Button>
                  </LinkContainer>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deleteHandler(employee._id)}
                  >
                    {/* //download bootstrap for trash icon */}
                    <i className="fa fa-trash">Delete</i>
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default AlternateTable;
