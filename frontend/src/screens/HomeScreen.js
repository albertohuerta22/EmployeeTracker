import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { Button, Form } from 'react-bootstrap';

//imported reducer
import { login } from '../action/userAction';

const HomeScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  // const location = useLocation();
  const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { loading, error } = userLogin;

  //redirect if already logged in
  // const redirect = location.search ? location.search.split('=')[1] : '/';

  // useEffect(() => {
  //   if (userInfo) {
  //     //setUserInfo(userInfo)
  //     navigate(redirect);
  //     //navigate('/')
  //   }
  // }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    //Dispatch Login reducer
    dispatch(login(username, password));
    //navigate to list screen
    navigate('/list');
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
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
