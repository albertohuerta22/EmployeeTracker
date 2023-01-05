import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

//imported actions
import { logout } from '../action/userAction.js';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [userInfo, setUserInfo] = useState({});
  const userInfoStorage = JSON.parse(localStorage.getItem('userInfo'));

  // useEffect(() => {
  //   if (!userInfoStorage) {
  //     setUserInfo(null);
  //   }
  // }, [userInfoStorage]);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    dispatch(logout());
    navigate('/');
  };

  return (
    <header style={{ position: 'sticky', top: '0' }}>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            {userInfoStorage ? 'Employee List' : 'Welcome to Employee Table'}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={logoutHandler}>
                {userInfoStorage ? 'Logout' : ''}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
