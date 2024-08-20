import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../logo icon/Vector.jpg"

const Login = () => {
  return (
    <>
      <div id="login-div" className="main-divs">
        <Navbar className="bg-body-white">
          <Container>
            <Navbar.Brand href="#home" className="d-flex gap-3 align-items-center">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              <p className="text-darkgrey">devlinks</p>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Login;