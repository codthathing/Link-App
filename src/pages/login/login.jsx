import { Link } from "react-router-dom";
import { Navbar, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import logo from "../logoicon/Vector.jpg"

const Login = () => {
  return (
    <div className="bg-lightgrey d-flex justify-content-center align-items-md-center vh-100">
      <div className="bg-white col-12 col-md-7 col-lg-4">
        <Navbar className="p-3 py-md-0 my-md-3">
          <Container>
            <Navbar.Brand className="d-flex gap-3 w-100 align-items-center justify-content-md-center">
              <img alt="Link app logo" src={logo} />
              <p className="text-darkgrey fw-bold mb-0 fs-3">devlinks</p>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div className="mt-2 px-4 px-md-4 py-md-3">
          <h3 className="fs-4 m-0">Login</h3>
          <p className="lead fs-5 text-textgrey m-0">Add your details below to get back into the app</p>
          <Form className="mt-3">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-1 text-darkgrey">Email address</Form.Label>
              <div className="d-flex gap-1 p-2 py-md-2 px-md-3 align-items-center border rounded rounded-3">
                <i className="bi bi-envelope-fill"></i>
                <Form.Control type="email" className="border-0 py-0 fw-lighter no-input-input text-darkgrey" placeholder="e.g. alex@email.com" />
              </div>
            </Form.Group>
            <Form.Group className="mt-3" controlId="exampleForm.ControlInput2">
              <Form.Label className="mb-1 text-darkgrey">Password</Form.Label>
              <div className="d-flex gap-1 p-2 py-md-2 px-md-3 align-items-center border rounded rounded-3">
                <i className="bi bi-lock-fill"></i>
                <Form.Control type="password" className="border-0 py-0 fw-lighter no-input-input text-darkgrey" placeholder="Enter your password" />
              </div>
            </Form.Group>
          </Form>
          <Link to="/preview"><Button variant="purple" className="w-100 py-2 mt-3" size="md">Login</Button></Link>
          <div className="mt-3 d-md-flex gap-md-1 justify-content-md-center">
            <p className="text-center mb-1 text-textgrey">Don't you have an account?</p>
            <Link to="/signup" className="text-purple text-decoration-none">
              <p className="text-center">Create account</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;