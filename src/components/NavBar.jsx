import { Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = ({ currentPage, pageSetter }) => {
  const linkMap = ["Landing", "Counter"];

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => pageSetter("Landing")}>
            CRA Boilerplate
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {linkMap.map((link) => {
                return (
                  <Nav.Link
                    active={link === currentPage}
                    onClick={() => pageSetter(link)}
                  >
                    {link}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
