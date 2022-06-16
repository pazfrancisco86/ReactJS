import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/"><button className='btn btn-outlined-primary'>Inicio</button></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/categoria/perro"><button className='btn btn-outlined-primary'>Perros</button></NavLink>
            <NavLink to="/categoria/gato"><button className='btn btn-outlined-primary'>Gatos</button></NavLink>
            <NavLink to="/categoria/wonejo"><button className='btn btn-outlined-primary'>Wonejos</button></NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to="/cart"><CartWidget/></Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;