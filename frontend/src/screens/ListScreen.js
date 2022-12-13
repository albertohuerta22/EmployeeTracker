import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

//imported actions
import { listEmployees } from '../action/employeeAction';

const ListScreen = () => {
  const dispatch = useDispatch();

  const employeeList = useSelector((state) => state.employeeList);
  const { loading, error, employees } = employeeList;

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    dispatch(listEmployees());
  }, [dispatch]);

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
            <th>SKILL</th>
            <th>DESCRIPTION</th>
            <th>SKILL LVL</th>
            <th>ACTIVE</th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees.map((employee) => (
              <tr key={employee._id}>
                {console.log(employee)}
                <td>{employee._id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.dob}</td>
                <td>{employee.age}</td>
                <td>{employee.skills.map((skill) => skill.name)}</td>
                <td>{employee.skills.map((skill) => skill.description)}</td>
                <td>null</td>
                <td>{employee.active.toString()}</td>
                <Button variant="">
                  {/* //download bootstrap for trash icon */}
                  <i className="fa fa-trash">X</i>
                </Button>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListScreen;
