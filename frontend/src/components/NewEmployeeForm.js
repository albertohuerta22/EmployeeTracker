import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

//imported components
import FormContainer from './FormContainer.js';

//imported from actions
import { createEmployee } from '../action/employeeAction.js';

const NewEmployeeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alert, setAlert] = useState(false);

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
    setAlert(true);
  };

  return (
    <div className="form-container">
      {/* <Link to="/list" className="btn btn-ligth my-3">
        Go Back
      </Link> */}
      {alert ? navigate('/') : ''}
      {/* <FormContainer> */}
      {/* <h1>New Employee</h1> */}
      <Form onSubmit={submitHandler} className="form-new-employee">
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
        <br />
        <div className="d-grid gap-2 px-8">
          <Button type="submit" variant="primary">
            Submit Employee
          </Button>
        </div>
      </Form>
      {/* </FormContainer> */}
      <div className="avatar">
        <Image
          rounded
          src="https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
        ></Image>
      </div>
    </div>
  );
};

export default NewEmployeeForm;

//you were working on edit employee and flex-grow 1:1 ratio
