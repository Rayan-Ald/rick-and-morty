import { Navbar, Nav, Container } from 'react-bootstrap';
export default function NavBar() {

    const connected = false;
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container color='white'>
                <Navbar.Brand href="/">Rick and morty fan page</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/episodes">episodes</Nav.Link>
                        <Nav.Link href="/favoris">Favoris</Nav.Link>
                    </Nav>
                    <Nav >
                        {connected ?
                            <Nav.Link href="/logout">Log Out</Nav.Link>
                            :
                            <Nav.Link href="/login">Log in</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}