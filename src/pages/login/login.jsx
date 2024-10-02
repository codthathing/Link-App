import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import logo from "../logoicon/Vector.jpg"

const Login = () => {
  return (
    <>
      <div id="login-div" className="main-divs">
        <Navbar className="bg-body-white p-3">
          <Container>
            <Navbar.Brand href="#home" className="d-flex gap-3 align-items-center">
              <img alt="" src={logo} width="30" height="30" />
              <p className="text-darkgrey fw-bold mb-0">devlinks</p>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container className="mt-2 px-4">
          <h3>Login</h3>
          <p className="lead">Add your details below to get back into the app</p>
          <Form className="mt-3">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-1">Email address</Form.Label>
              <div className="d-flex gap-1 p-2 align-items-center border rounded rounded-3">
                <i className="bi bi-envelope-fill"></i>
                <Form.Control type="email" className="border-0 py-0 fw-lighter no-input-input" placeholder="e.g. alex@email.com" />
              </div>
            </Form.Group>
            <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-1">Password</Form.Label>
              <div className="d-flex gap-1 p-2 align-items-center border rounded rounded-3">
                <i className="bi bi-lock-fill"></i>
                <Form.Control type="password" className="border-0 py-0 fw-lighter no-input-input" placeholder="Enter your password" />
              </div>
            </Form.Group>
          </Form>
          <Button variant="purple" className="w-100 py-2 mt-3" size="md">Login</Button>
          <p className="text-center mt-3 mb-1">Don't you have an account?</p>
          <Link to="/signup" className="text-purple text-decoration-none">
            <p className="text-center">Create account</p>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Login;