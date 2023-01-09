import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Form, Button, Image, FloatingLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Message from '../components/Message.js';
import Loader from '../components/Loader.js';
import FormContainer from '../components/FormContainer.js';

import { listEmployeeDetails } from '../action/employeeAction.js';
import { updateEmployee } from '../action/employeeAction.js';

const EditScreen = () => {
  const { state: employee } = useLocation();
  // console.log(employee);

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [email, setEmail] = useState(employee.email);
  const [dob, setDOB] = useState(employee.dob);
  const [age, setAge] = useState(employee.age);
  const [active, setActive] = useState(employee.active);
  const [skillName, setSkillName] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const params = useParams();
  //   console.log(params.id);

  const employeeDetails = useSelector((state) => state.employeeDetails);
  const { loading, error } = employeeDetails;

  //   const userUpdate = useSelector((state) => state.userUpdate);
  //   const {
  //     loading: loadingUpdate,
  //     error: errorUpdate,
  //     success: successUpdate,
  //   } = userUpdate;

  useEffect(() => {
    dispatch(listEmployeeDetails(params.id));
    // navigate('/list');
  }, [dispatch, listEmployeeDetails]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateEmployee({
        _id: params.id,
        firstName,
        lastName,
        email,
        dob,
        age,
        active,
        skillName,
        description,
      })
    );
    navigate('/list');
  };
  return (
    <>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      {/* <div className="second-header"></div> */}
      <Link to="/list" className="btn btn-ligth my-3">
        Go Back
      </Link>
      <h1 style={{ margin: '20px', textAlign: 'center' }}>Edit Employee</h1>
      <div className="edit-form-container">
        <div className="edit-avatar">
          <Image
            rounded
            src="https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
          ></Image>
        </div>
        {/* <FormContainer> */}

        {/* {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : ( */}
        <Form
          onSubmit={submitHandler}
          style={{ padding: '20px', margin: '20px', flex: '1' }}
        >
          <Form.Group controlId="firstName">
            <FloatingLabel
              controlId="firstName"
              label="Full Name"
              className="mb-3"
            >
              <Form.Control
                type="firstName"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="lastName">
            <FloatingLabel
              controlId="lastName"
              label="Last Name"
              className="mb-3"
            >
              <Form.Control
                type="lastName"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="email">
            <FloatingLabel controlId="email" label="email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={employee.email}
                disabled
                // onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="dob">
            <FloatingLabel
              controlId="dob"
              label="Date of Birth"
              className="mb-3"
            >
              <Form.Control
                type="date"
                placeholder="D.O.B."
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="age">
            <FloatingLabel controlId="age" label="Age" className="mb-3">
              <Form.Control
                type="age"
                placeholder="Enter Age"
                value={age}
                disabled
                onChange={(e) => setAge(e.target.value)}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="active">
            <FloatingLabel
              controlId="active"
              label="Active Status"
              className="mb-3"
            >
              <Form.Control
                type="active"
                placeholder="Enter Active Status"
                value={active}
                onChange={(e) => setActive(e.target.value)}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="active">
            <FloatingLabel
              controlId="active"
              label="Active Status"
              className="mb-3"
            >
              <Form.Control
                type="skillName"
                placeholder="Enter Skill Name"
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Form.Group controlId="description">
            <FloatingLabel
              controlId="description"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                type="description"
                placeholder="Enter Skill Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <div className="btn-container">
            <Button type="submit" variant="primary" className="submit-btn">
              Update
            </Button>
          </div>
        </Form>
        {/* </FormContainer> */}
      </div>
    </>
  );
};

export default EditScreen;
