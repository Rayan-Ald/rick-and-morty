import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href='/'>
                    Rick and morty fan page
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/episode'>
                            episode
                        </Nav.Link>
                    </ Nav>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/favoris'>
                            Favoris
                        </Nav.Link>
                    </ Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}