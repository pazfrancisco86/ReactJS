import {Navbar} from "react-bootstrap"
import {Nav} from "react-bootstrap"
import {NavDropdown} from "react-bootstrap"
import {Container} from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"

export default function NavBarj() {
    return (
        <Navbar bg="dark" variant="dark"expand="lg">
  <Container>
    <Navbar.Brand href="#home">
    <CartWidget/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Info Disponible" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Legajos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Perfiles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Documentos de pozo</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Muestras de campo</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        )
}