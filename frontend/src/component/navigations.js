import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import { Link, NavLink } from 'react-router-dom';

export function Navigation() {
  const [isAuth, setIsAuth] = useState(false);
  console.log(isAuth);

  useEffect(() => {
    const access_token = Cookies.get('access_token');
    setIsAuth(!!access_token);
  }, [isAuth]);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          JWT Authentication
        </Navbar.Brand>
        <Nav className="me-auto">
          {isAuth && (
            <Nav.Link as={NavLink} to="/" exact activeClassName="active">
              Home
            </Nav.Link>
          )}
        </Nav>
        <p style={{ color: 'white' }}>isAuth: {isAuth.toString()}</p>
        <Nav>
          {isAuth ? (
            <Nav.Link as={NavLink} to="/user/logout" exact activeClassName="active">
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link as={NavLink} to="/user/login" exact activeClassName="active">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}
