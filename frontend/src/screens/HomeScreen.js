import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { Button, Form } from 'react-bootstrap';

//imported reducer
import { login } from '../action/userAction';

//imported components
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  console.log(userInfo);
  //redirect if already logged in
  // const redirect = location.search ? location.search.split('=')[1] : '/';

  // const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    if (userInfo) {
      //     //setUserInfo(userInfo)
      // navigate(redirect);
      navigate('/list');
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    //Dispatch Login reducer
    dispatch(login(username, password));
    //navigate to list screen
    // navigate('/list');
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
    </FormContainer>
  );
};

export default HomeScreen;
