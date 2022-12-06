import React from 'react';
import FormContainer from '../components/FormContainer';
import { Form } from 'react-bootstrap';
const HomeScreen = () => {
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter Username"
            value=""
            //onchange listner
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value=""
            //onchange
          ></Form.Control>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default HomeScreen;
