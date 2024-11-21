import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Form, Button } from 'react-bootstrap';
import app_logo from '../assets/images/app-logo.jpg';

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-lightgrey d-flex justify-content-center align-items-md-center vh-100">
      <div className="bg-white col-12 col-md-7 col-lg-4">
        <Navbar className="p-3 py-md-0 my-md-3">
          <Container>
            <Navbar.Brand className="d-flex gap-3 w-100 align-items-center justify-content-md-center">
              <img alt="Link app logo" src={app_logo} />
              <p className="text-darkgrey fw-bold mb-0 fs-3">devlinks</p>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div className="mt-2 px-4 px-md-4 py-md-3">
          <h3 className="fs-4 m-0">Create account</h3>
          <p className="lead fs-5 text-textgrey m-0">
            Let's get you started sharing your links!
          </p>
          <Form className="mt-3">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-1 text-darkgrey">
                Email address
              </Form.Label>
              <div className="d-flex gap-1 p-2 py-md-2 px-md-3 align-items-center border rounded rounded-3">
                <i className="bi bi-envelope-fill"></i>
                <Form.Control
                  type="email"
                  className="border-0 py-0 fw-lighter no-input-input text-darkgrey"
                  placeholder="e.g. alex@email.com"
                />
              </div>
            </Form.Group>
            <Form.Group className="mt-3" controlId="exampleForm.ControlInput2">
              <Form.Label className="mb-1 text-darkgrey">
                Create password
              </Form.Label>
              <div className="d-flex gap-1 p-2 py-md-2 px-md-3 align-items-center border rounded rounded-3">
                <i className="bi bi-lock-fill"></i>
                <Form.Control
                  type="password"
                  className="border-0 py-0 fw-lighter no-input-input text-darkgrey"
                  placeholder="At least .8 characters"
                />
              </div>
            </Form.Group>
            <Form.Group className="mt-3" controlId="exampleForm.ControlInput3">
              <Form.Label className="mb-1 text-darkgrey">
                Confirm password
              </Form.Label>
              <div className="d-flex gap-1 p-2 py-md-2 px-md-3 align-items-center border rounded rounded-3">
                <i className="bi bi-lock-fill"></i>
                <Form.Control
                  type="password"
                  className="border-0 py-0 fw-lighter no-input-input text-darkgrey"
                  placeholder="At least .8 characters"
                />
              </div>
            </Form.Group>
          </Form>
          <p className="mt-3 mb-0">
            Password must contain at-2 least 8 characters
          </p>
          <Button variant="purple" className="w-100 py-2 mt-3" size="md">
            Create new account
          </Button>
          <div className="mt-3 d-md-flex gap-md-1 justify-content-md-center">
            <p className="text-center mb-1 text-textgrey">
              Already have an account?
            </p>
            {/* <Link to="/" className=""> */}
            <a
              onClick={() => navigate('/')}
              className="text-center text-purple text-decoration-none cursor-pointer"
            >
              Login
            </a>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
