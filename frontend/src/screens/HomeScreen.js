import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { Button, Form } from 'react-bootstrap';

//imported reducer
import { login } from '../action/userAction.js';

//imported components
import Message from '../components/Message.js';
import Loader from '../components/Loader.js';

const HomeScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  // const location = useLocation();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error } = userLogin;
  //redirect if already logged in

  const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

  //NEED TO REDIRECT IF ALREADY LOGGED IN FROM HOME SCREEN TO LIST
  useEffect(() => {
    if (userInfo) {
      navigate('/list');
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    //Dispatch Login reducer
    dispatch(login(username, password));
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="login-container">
        <h1 style={{ textAlign: 'center' }}>Sign In</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Form.Group controlId="username" className="form-fill">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password" className="form-fill">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br />
          <div className="d-grid gap-2">
            <Button type="submit" variant="primary">
              Sign In
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default HomeScreen;
