import React, { useState, useEffect } from 'react';
// import { LinkContainer } from 'react-router-bootstrap';
import {
  Table,
  Button,
  Pagination,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
// import overlayFactory from 'react-bootstrap-table2-overlay';

//imported components
import Paginate from '../components/Paginate.js';
import NewEmployeeForm from '../components/NewEmployeeForm.js';
import Message from '../components/Message.js';
import Loader from '../components/Loader.js';
import NewModel from '../components/NewModel.js';
import useWindowDimensions from '../components/FindWindow.js';
import { logout } from '../action/userAction.js';
import {
  OverlayPopEmail,
  OverlayPopId,
  OverlayPopDOB,
  OverlayPopSkillId,
  OverlayPopActive,
  OverlayPopFirstName,
  OverlayPopLastName,
} from '../components/OverlayPop.js';

//imported actions
import {
  listEmployees,
  deleteEmployee,
  updateEmployee,
  resetEmployee,
} from '../action/employeeAction.js';
import { listSkills } from '../action/skillsAction.js';

const employeeAdded = JSON.parse(sessionStorage.getItem('employeeAdded'));

const AlternateTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //window shrink hook
  const { width, height } = useWindowDimensions();
  //modal
  const [show, setShow] = useState(false);

  const [access, setAccess] = useState(false);
  const [added, setAdded] = useState(null);
  const [newEmployee, setNewEmployee] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(null);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleClose = () => {
    setShow(false); //handles modal
    // setNewEmployee(true); //verify contents
  };
  const handleShow = () => {
    if (!sessionStorage.getItem('userInfo')) {
      navigate('/');
    } else {
      setShow(true);
    }
  };

  ///// USE SELECTOR HOOKS //
  const employeeList = useSelector((state) => state.employeeList);
  const { loading, error, employees } = employeeList;

  const createEmployee = useSelector((state) => state.createEmployee);
  const { error: createError, success: newemployeesuccess } = createEmployee;

  const updateEmployee = useSelector((state) => state.updateEmployee);
  const { success: updatesuccess } = updateEmployee;
  // console.log(success);

  const skillList = useSelector((state) => state.skillList);
  const { skills } = skillList;
  // console.log(skills);

  //if not logged in protect middleware will prevent screen
  useEffect(() => {
    if (updatesuccess) {
      setAdded(true); //handles the update success message
      setTimeout(() => {
        setAdded(false);
      }, 2000);

      dispatch(listEmployees());
      dispatch(listSkills());
      dispatch(resetEmployee());
    } else if (newemployeesuccess) {
      setNewEmployee(true); //handles the new employee success message
      setTimeout(() => {
        setNewEmployee(false);
      }, 2000);

      dispatch(listEmployees());
      dispatch(listSkills());
      dispatch(resetEmployee());
    } else {
      dispatch(listEmployees());
      dispatch(listSkills());
    }

    // addedEmployee();
  }, [dispatch, listEmployees, listSkills, updatesuccess, newemployeesuccess]);

  //get current employees
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = employees
    ? employees.slice(indexOfFirstPost, indexOfLastPost)
    : [];
  // console.log(employees);

  const deleteHandler = (id) => {
    //console.log(userInfo.token);
    // fail safe
    if (!sessionStorage.getItem('userInfo')) {
      navigate('/');
    } else {
      if (window.confirm('Are you sure')) {
        dispatch(deleteEmployee(id));
        setDeleteSuccess(true);

        setTimeout(() => {
          navigate('/'); // change this to useState change not navigate
        }, 1000);
      }
    }
  };
  const editHandler = (employee) => {
    if (!sessionStorage.getItem('userInfo')) {
      navigate('/');
    } else {
      navigate(`/list/${employee.id}`, { state: employee });
    }
  };

  return (
    <>
      {/* {access ? '' : <Button>Take Me Back!</Button>} */}
      {error && <Message variant="danger">{error}</Message>}
      {createError && <Message variant="danger">{createError}</Message>}
      {loading && <Loader />}

      {added ? <Message variant="success">Employee Updated!</Message> : ''}

      {newEmployee ? (
        <Message variant="success">New Employee Added!</Message>
      ) : (
        ''
      )}
      {deleteSuccess ? (
        <Message variant="success">Employee Deleted!</Message>
      ) : (
        ''
      )}

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST</th>
            <th>LAST</th>
            <th>EMAIL</th>
            <th>DOB</th>
            <th>AGE</th>
            {/* <th>SKILL ID</th> */}
            <th>SKILL Name</th>
            <th>DESCRIPTION</th>
            <th>ACTIVE</th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            currentPosts.map((
              employee // employees > currentPosts
            ) => (
              <tr key={employee._id}>
                <td>
                  <OverlayPopId id={employee._id}></OverlayPopId>
                </td>
                <td>
                  {width < 1000 ? (
                    <OverlayPopFirstName firstName={employee.firstName} />
                  ) : (
                    employee.firstName
                  )}
                </td>
                <td>
                  {width < 1000 ? (
                    <OverlayPopLastName lastName={employee.lastName} />
                  ) : (
                    employee.lastName
                  )}
                </td>
                <td>
                  {width < 1500 ? (
                    // <i className="bi bi-envelope"></i>
                    <OverlayPopEmail email={employee.email}></OverlayPopEmail>
                  ) : (
                    employee.email
                  )}
                </td>
                <td>
                  <OverlayPopDOB dob={employee.dob}></OverlayPopDOB>
                </td>
                <td>{employee.age}</td>

                {/* <td>
                  {skills.map((skill) => {
                    for (let key in skill) {
                      if (employee._id === skill[key]) {
                        return (
                          <OverlayPopSkillId
                            key={skill._id}
                            skillID={skill._id}
                          ></OverlayPopSkillId>
                        );
                      }
                    }
                    return null;
                  })}
                </td> */}
                <td>
                  {employee.skills}
                  {/* {skills.map((skill) => {
                    for (let key in skill) {
                      if (employee._id === skill[key]) {
                        return skill.name;
                      }
                    }
                    return null;
                  })} */}
                </td>
                <td>
                  {
                    // console.log(skill, employee);
                    employee.description
                  }
                </td>

                <td>
                  <OverlayPopActive
                    active={employee.active.toString()}
                  ></OverlayPopActive>
                </td>
                <td>
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
                        skill: employee.skills,
                        description: employee.description,
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

      <div className="pagination">
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={employees ? employees.length : 0}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default AlternateTable;
