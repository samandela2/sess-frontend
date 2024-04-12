import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>SESS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav>
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/schedule">
            <Nav.Link>Schedule</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/task-details">
            <Nav.Link>Task Details</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/client-search">
            <Nav.Link>Client Search</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/client-details">
            <Nav.Link>Client Details</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/appointment-slot">
            <Nav.Link>Appointment Slot </Nav.Link>
          </LinkContainer>
        </Nav>

        <Nav>
          <LinkContainer to="/logoff">
            <Nav.Link>Logoff</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
