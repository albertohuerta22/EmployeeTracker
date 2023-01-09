import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { Button, Form, Image, Modal } from 'react-bootstrap';
import logo from '../assets/kaseya_adapter.png';

//imported reducer
import { login } from '../action/userAction.js';

//imported components
import Message from '../components/Message.js';
import Loader from '../components/Loader.js';
import NewAdmin from '../components/NewAdmin';

const HomeScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const [isChecked, setIsChecked] = useState(false); //handles checkbox

  const navigate = useNavigate();
  // const location = useLocation();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); //handles modal
  const handleShow = () => setShow(true);

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

  const togglePassword = (e) => {
    e.preventDefault();
    // When the handler is invoked
    // inverse the boolean state of passwordShown

    setPasswordShown(!passwordShown);
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="kaseya-img">
        <Image src={logo} alt="kaseya"></Image>
      </div>
      <div className="overlay"></div>
      <div className="login-container">
        <h1 style={{ textAlign: 'center' }}>Sign In</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Form.Group controlId="username" className="form-fill">
            {/* <Form.Label>Username</Form.Label> */}
            <Form.Control
              type="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password" className="form-fill">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type={passwordShown ? 'text' : 'password'}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Check
            className="checkbox"
            type="checkbox"
            label="Show Password"
            checked={isChecked}
            onChange={togglePassword}
          />
          <br />
          <div className="d-grid gap-2">
            <Button type="submit" variant="primary">
              Sign In
            </Button>
          </div>
        </Form>

        <div className="new-user">
          <hr></hr>
          <span>New User?</span>
        </div>
        <Button
          onClick={handleShow}
          className="register-btn"
          variant="secondary"
        >
          Register
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
          <Modal.Header closeButton></Modal.Header>
          <Modal.Title>Register Below</Modal.Title>
          <Modal.Body>
            <NewAdmin />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default HomeScreen;
