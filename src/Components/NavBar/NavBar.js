import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import './NavBar.css';
export default function NavBar() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    useEffect(() => {
        if (user.userId) {
            // dispatch(setLogOut())
        }
    }, [user.userId])


    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container color='white'>
                <Navbar.Brand style={{ border: '0px' }} href="/"><img src='https://logo-marque.com/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png' style={{ width: '100px', alignContent: 'center' }} /> Fan page</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/episodes">Episodes</Nav.Link>
                        <Nav.Link href="/favoris">Favoris</Nav.Link>
                    </Nav>
                    <Nav >
                        {user.userId ?
                            <Nav.Link href='/login'>
                                {auth.currentUser.email}
                            </Nav.Link>
                            :
                            <Nav.Link href='/login'><FontAwesomeIcon icon={solid('user')} />
                                Sign in
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}