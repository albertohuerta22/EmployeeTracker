import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

//imported components
import FormContainer from './FormContainer.js';
import Message from './Message.js';

//imported from actions
import { createEmployee } from '../action/employeeAction.js';

const NewEmployeeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alert, setAlert] = useState(false);

  const [newEmployee, setNewEmployee] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [age, setAge] = useState('');
  const [active, setActive] = useState('');
  const [skill, setSkill] = useState('');
  const [description, setDescription] = useState('');
  const employeePresent = JSON.parse(sessionStorage.getItem('userInfo'));

  const submitHandler = (e) => {
    e.preventDefault();
    if (employeePresent) {
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
    }
    setAlert(true);

    // if (firstName === '') {
    //   sessionStorage.setItem('employeeAdded', JSON.stringify(true));
    // }
  };

  return (
    <div className="form-container">
      {newEmployee ? (
        <Message variant="success">New Employee Added!</Message>
      ) : (
        ''
      )}
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
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="lastName"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>D.O.B</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter D.O.B."
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="age"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Active</Form.Label>
          <Form.Control
            type="active"
            placeholder="Enter active status"
            value={active}
            onChange={(e) => setActive(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          {/*/className="skills-radio" */}
          {/* <Form.Label className="radio-label" style={{ fontWeight: 'bold' }}>
            Skill Name
          </Form.Label> */}
          {/* <div
            className="form-check form-check-inline"
            onChange={(e) => console.log(e.target.value)}
          >
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />

            <label className="form-check-label">Python</label>
          </div>

          <div
            className="form-check form-check-inline"
            onChange={(e) => console.log(e.target.value)}
          >
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label">Javascript</label>
          </div>
          <div
            className="form-check form-check-inline"
            onChange={(e) => console.log(e.target.value)}
          >
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <label className="form-check-label">C#</label>
          </div> */}
          <Form.Label>Skill</Form.Label>
          <Form.Control
            as="select"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            required
          >
            <option>Select Menu</option>
            <option value="Scala">Scala</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
          </Form.Control>
          {/* <Form.Control
            type="skill"
            placeholder="Enter skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          ></Form.Control> */}
        </Form.Group>

        <Form.Group>
          {/* <Form.Label className="radio-label">Skill Description</Form.Label> */}
          {/* <div
            className="form-check2 form-check-inline"
            onChange={(e) => console.log(e.target.value)}
          >
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="low"
            />

            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Low
            </label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Medium
            </label>
          </div>
          <div className="form-chehtmlForm-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              High
            </label>
          </div> */}
          {/* <Form.Label>Skill</Form.Label> */}
          {/* <Form.Control
            type="skill"
            placeholder="Enter skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          ></Form.Control> */}
        </Form.Group>
        <Form.Group>
          <Form.Label>Skill Description</Form.Label>
          <Form.Control
            type="description"
            placeholder="Enter skill description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
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
