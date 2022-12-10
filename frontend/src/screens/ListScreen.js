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

  // console.log(employees);
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
                <td>null</td>
                <td>null</td>
                <td>null</td>
                <td>{employee.active.toString()}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListScreen;
