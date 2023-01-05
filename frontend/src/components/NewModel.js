import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

//imported components
import FormContainer from './FormContainer.js';

//imported from actions
import { createEmployee } from '../action/employeeAction.js';
const NewModel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [age, setAge] = useState('');
  const [active, setActive] = useState('');
  const [skill, setSkill] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createEmployee({
        firstName,
        lastName,
        email,
        dob,
        age,
        active,
        skill,
        description,
      })
    );
    navigate('/list');
  };

  return (
    <>
      {/* <Modal show={show} onHide={handleClose}> */}
      <FormContainer>
        <h1>New Employee</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="newEmployee">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="firstName"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="lastName"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>D.O.B</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter D.O.B."
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="age"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Active</Form.Label>
            <Form.Control
              type="active"
              placeholder="Enter active status"
              value={active}
              onChange={(e) => setActive(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Skill</Form.Label>
            <Form.Control
              type="skill"
              placeholder="Enter skill"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Skill Description</Form.Label>
            <Form.Control
              type="description"
              placeholder="Enter skill description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Submit Employee
          </Button>
        </Form>
      </FormContainer>
      {/* </Modal> */}
      {/* <Link to="/list" className="btn btn-ligth my-3">
        Go Back
      </Link> */}
    </>
  );
};

export default NewModel;
