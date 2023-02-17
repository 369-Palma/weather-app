import { Navbar, Container, Nav /* , NavDropdown */ } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MyMeteo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">Today</Nav.Link>
            <Nav.Link href="#pricing">4 days prediction</Nav.Link>
            {/* <NavDropdown title="Contact" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">Email</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Phone</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
