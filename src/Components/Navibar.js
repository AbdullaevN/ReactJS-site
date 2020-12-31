import {Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Nav, Navbar, Button, Container, Modal, Form } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link{
        color: #adb1b8;
        &:hover{
            color: white
        }
    }
`
 
const Navibar =() =>{

    const [show, setShow, setChanges] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const handleChanges = () => setChanges(true)
    
    return(
    <>
    <Styles>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container>
            <Navbar.Brand>WebDev Blog</Navbar.Brand> 
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
                    <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Button variant='primary'  className='mr-2' onClick={handleShow}>Log In</Button>
                    <Button variant='primary' onClick={handleShow} >Sign Out</Button>
                </Nav>

            </Navbar.Collapse>   
            </Container>
        </Navbar>
        </Styles>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Loh in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId='fromBasicEmail'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' />
                        <Form.Text className='text-muted' >We'll never share your email with anyone else</Form.Text> 
                    </Form.Group>

                    <Form.Group controlId='fromBasicPassword'>
                        <Form.Label> Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password' />
                    </Form.Group>

                    <Form.Group controlId='fromBasicBasicCheckBox'>
                        <Form.Check type='checkbox' label='Remember me' />
                    </Form.Group>

                    <Button variant='primary'  className='mr-2' onClick={handleClose}>Close</Button>
                    <Button variant='primary' onClick={handleChanges} >Save Changes</Button>
                </Form>
            </Modal.Body>
        </Modal>
     </> 
    )
}
export default Navibar