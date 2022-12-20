import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

//imported actions
import { logout } from '../action/userAction';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfoStorage = JSON.parse(localStorage.getItem('userInfo'));

  const [userInfo, setUserInfo] = useState(userInfoStorage);

  useEffect(() => {
    if (!userInfoStorage) {
      setUserInfo(null);
    }
  }, [userInfoStorage]);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    dispatch(logout());
    navigate('/');
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>Employee List</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo ? (
                <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
              ) : (
                ''
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
