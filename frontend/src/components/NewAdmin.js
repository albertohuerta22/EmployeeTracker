import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Image, FloatingLabel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

//imported from actions

const NewAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alert, setAlert] = useState(false);

  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch();
    //   createEmployee({
    //     firstName,
    //     lastName,
    //     email,
    //     dob,
    //     age,
    //     active,
    //     skill,
    //     description,
    //   })
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
          <FloatingLabel controlId="fullname" label="Name" className="mb-3">
            <Form.Control
              className="my-3"
              type="Name"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></Form.Control>
          </FloatingLabel>
          {/* <Form.Label>Name</Form.Label> */}
        </Form.Group>
        <Form.Group>
          <FloatingLabel controlId="password" label="Password" className="mb-3">
            <Form.Control
              className="my-3"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </FloatingLabel>
          {/* <Form.Label>password</Form.Label> */}
        </Form.Group>
        <Form.Group>
          <FloatingLabel controlId="Username" label="Username" className="mb-3">
            <Form.Control
              className="my-3"
              type="username"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></Form.Control>
          </FloatingLabel>
          {/* <Form.Label>username</Form.Label> */}
        </Form.Group>
        <Form.Group>
          <FloatingLabel
            controlId="Admin"
            label="Admin Status"
            className="mb-3"
          >
            <Form.Control
              className="my-3"
              type="admin"
              placeholder="Admin Status"
              value={admin}
              onChange={(e) => setAdmin(e.target.value)}
            ></Form.Control>
          </FloatingLabel>
          {/* <Form.Label>Admin Status</Form.Label> */}
        </Form.Group>

        <br />
        <div className="d-grid gap-1 px-8">
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

export default NewAdmin;
