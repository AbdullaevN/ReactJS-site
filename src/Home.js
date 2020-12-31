import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import Slider from '../src/Components/Slider'
import Jumbotron from '../src/Components/Jumbotron'
import water from './water.jpeg'


export const Home = () => {
    return(
        <>
        <Slider/>
        <Container style ={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                <Card style = {{width: '18rem'}}>
                    <Card.Img variant='top' src={water}/>
                    <Card.Body>
                        <Card.Title>Webdev</Card.Title>
                        <Card.Text>
                            fergee ergeqrg eqrg eqr gqergqergeqrg eqg eg qr
                        </Card.Text>
                        <Button variant='primary'>Learn more</Button>
                    </Card.Body>
                    </Card> 
                </Col>
                
                <Col>
                <Card style = {{width: '18rem'}}>
                    <Card.Img variant='top' src={water}/>
                    <Card.Body>
                        <Card.Title>Webdev</Card.Title>
                        <Card.Text>
                            fergee ergeqrg eqrg eqr gqergqergeqrg eqg eg qr
                        </Card.Text>
                        <Button variant='primary'>Learn more</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col>
                <Card style = {{width: '18rem'}}>
                    <Card.Img variant='top' src={water}/>
                    <Card.Body>
                        <Card.Title>Webdev</Card.Title>
                        <Card.Text>
                            fergee ergeqrg eqrg eqr gqergqergeqrg eqg eg qr
                        </Card.Text>
                        <Button variant='primary'>Learn more</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container> 
        <Jumbotron/>
        <Container style={{marginBottom: '30px'}}>
            <Row>
                <Col md={7}>
                    <img src={water} height={250} />
                </Col>
                <Col md={5}>
                    <h2>WebDev</h2>
                <p>
                        olor cillum magna non pariatur commodo sint ullamco adipisicing magna id anim. Nisi cillum esse occaecat ex ex esse amet excepteur
                    labore aliqua tempor aliqua pariatur quis. 
                    Ea nisi laborum in elit quis in sint mollit do. A
                    dipisicing dolore aute nisi magna ipsum. 
                    Cupidatat esse velit do velit irure ut magna labore velit exercitation.
                    Occaecat nisi nostrud amet ex dolor sunt nostrud. 
                    Elit pariatur dolor quis ad cillum elit velit incididunt cupidatat.
                    Cupidatat esse velit do velit irure ut magna labore velit exercitation.
                    Occaecat nisi nostrud amet ex dolor sunt nostrud. 
                    Elit pariatur dolor quis ad cillum elit velit incididunt cupidatat
                </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}