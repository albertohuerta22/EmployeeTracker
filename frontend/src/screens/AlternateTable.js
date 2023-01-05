import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Paginate from 'react-bootstrap/Pagination';
// import overlayFactory from 'react-bootstrap-table2-overlay';

//imported components
import NewEmployeeForm from '../components/NewEmployeeForm.js';
import Message from '../components/Message.js';
import Loader from '../components/Loader.js';
import NewModel from '../components/NewModel.js';
import useWindowDimensions from '../components/FindWindow.js';
// import Paginate from '../components/Paginate.js';

//imported actions
import { listEmployees, deleteEmployee } from '../action/employeeAction.js';
import { listSkills } from '../action/skillsAction.js';

const AlternateTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { width, height } = useWindowDimensions();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false); //handles modal
  const handleShow = () => setShow(true);

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
      navigate('/');
    }
  };
  const editHandler = (employee) => {
    navigate(`/list/${employee.id}`, { state: employee });
  };

  const listScreen = (id) => {
    console.log('');
    // navigate = ()
  };

  let active = 3;
  let items = [];
  if (employees) {
    for (let number = 1; number <= employees.length; number++) {
      // console.log(employees[number]._id);
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {employees[number]}
        </Pagination.Item>
      );
    }
  }

  return (
    <>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Table striped bordered hover responsive>
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

                <td>
                  {skills.map((skill) => {
                    for (let key in skill) {
                      if (employee._id === skill[key]) {
                        return skill._id;
                      }
                    }
                    return null;
                  })}
                </td>
                <td>
                  {skills.map((skill) => {
                    for (let key in skill) {
                      if (employee._id === skill[key]) {
                        return skill.name;
                      }
                    }
                    return null;
                  })}
                </td>
                <td>
                  {skills.map((skill) => {
                    // console.log(skill, employee);
                    if (skill.employee === employee._id) {
                      return skill.description;
                    }
                    return null;
                  })}
                </td>

                <td>{employee.active.toString()}</td>
                <td>
                  {/* <LinkContainer to={`/list/${employee._id}`}> */}
                  <Button
                    variant="primary"
                    onClick={() =>
                      editHandler({
                        id: employee._id,
                        email: employee.email,
                        firstName: employee.firstName,
                        lastName: employee.lastName,
                        age: employee.age,
                        active: employee.active,
                        dob: employee.dob,
                      })
                    }
                  >
                    {/* //download bootstrap for trash icon */}
                    {width < 1600 ? (
                      <i className="bi bi-pencil-square"></i>
                    ) : (
                      'Edit'
                    )}
                  </Button>
                  {/* </LinkContainer> */}
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deleteHandler(employee._id)}
                  >
                    {width < 1600 ? (
                      <i className="bi bi-trash3-fill"></i>
                    ) : (
                      'Delete'
                    )}
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <>
        {/* <LinkContainer
          to={`/newemployee`}
          style={{ float: 'right', marginRight: '20px' }}
        >
          <Button variant="success">+ New Employee</Button>
          {/* <NewEmployeeForm className="" /> */}
        {/* <//LinkContainer> */}
        <Button
          variant="success"
          onClick={handleShow}
          style={{ float: 'right', marginRight: '20px' }}
        >
          + New Employee
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          keyboard={false}
          backdrop="static"
          dialogClassName={'primaryModal'}
          size="lg"
          className="modal custom fade"
          role="dialog"
        >
          <Modal.Header closeButton>
            <Modal.Title>New Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewEmployeeForm />
          </Modal.Body>
        </Modal>
      </>
      {/* <div>
        <Pagination>{items}</Pagination>
      </div> */}
    </>
  );
};

export default AlternateTable;
