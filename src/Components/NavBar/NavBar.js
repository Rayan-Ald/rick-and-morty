import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Rick and morty fan page</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/episodes">episodes</Nav.Link>
                        <Nav.Link href="/favoris">Favoris</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}