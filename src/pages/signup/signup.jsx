import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import logo from "../logoicon/Vector.jpg"

const SignUp = () => {
  return (
    <>
      <div id="login-div" className="main-divs">
        <Navbar className="bg-body-white px-3 py-4">
          <Container>
            <Navbar.Brand href="#home" className="d-flex gap-3 align-items-center">
              <img alt="" src={logo} width="30" height="30" />
              <p className="text-darkgrey fw-bold mb-0">devlinks</p>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container className="mt-5 px-4">
          <h2 className="fw-bold">Create account</h2>
          <p className="lead">Let’s get you started sharing your links!</p>
          <Form className="mt-5">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <div className="d-flex gap-1 p-3 align-items-center border rounded rounded-3">
                <i className="bi bi-envelope-fill"></i>
                <Form.Control type="email" className="border-0 py-0 fw-lighter no-input-input" placeholder="e.g. alex@email.com" />
              </div>
            </Form.Group>
            <Form.Group className="mt-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Create password</Form.Label>
              <div className="d-flex gap-1 p-3 align-items-center border rounded rounded-3">
                <i class="bi bi-lock-fill"></i>
                <Form.Control type="password" className="border-0 py-0 fw-lighter no-input-input" placeholder="At least .8 characters" />
              </div>
            </Form.Group>
            <Form.Group className="mt-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm password</Form.Label>
              <div className="d-flex gap-1 p-3 align-items-center border rounded rounded-3">
                <i class="bi bi-lock-fill"></i>
                <Form.Control type="password" className="border-0 py-0 fw-lighter no-input-input" placeholder="At least .8 characters" />
              </div>
            </Form.Group>
          </Form>
          <p className="mt-4 mb-0">Password must contain at least 8 characters</p>
          <Button variant="purple" className="w-100 py-3 mt-4" size="lg">Create new account</Button>
          <p className="text-center mt-4 mb-1">Already have an account?</p>
          <Link to="/" className="text-purple text-decoration-none">
            <p className="text-center">Login</p>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default SignUp;