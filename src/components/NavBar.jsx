import { Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = ({ pageSetter }) => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">CRA Boilerplate</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => pageSetter("Landing")}>Landing</Nav.Link>
              <Nav.Link onClick={() => pageSetter("Counter")}>Counter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
