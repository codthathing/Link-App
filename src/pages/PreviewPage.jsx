import { Navbar, Container } from "react-bootstrap";
import app_logo from "../assets/images/app-logo.jpg";
import link_bold from "../assets/images/link-bold.png";

const PreviewPage = () => {
  return (
    <Navbar className="bg-body-tertiary m-3">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand className="d-flex gap-3 align-items-center">
          <img alt="Link app logo" src={app_logo} />
          <Navbar.Text className="text-darkgrey fw-bold mb-0 fs-3">devlinks</Navbar.Text>
        </Navbar.Brand>
        <Navbar.Brand className="d-flex gap-4 align-items-center">
          <Navbar.Brand className="d-flex gap-2 bg-purple-hover py-2 px-4 fs-2">
            <img src={link_bold} alt="Link icon" />
            <Navbar.Text className="fs-5">Links</Navbar.Text>
          </Navbar.Brand>
          <Navbar.Brand></Navbar.Brand>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default PreviewPage;
