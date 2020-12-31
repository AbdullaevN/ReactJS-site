import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import water from '../water.jpeg'
import styled from 'styled-components'

const Styles = styled.div`
    .jumbo {
        background: url(${water}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay{
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;

    }
`;

const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className='jumbo'>
        <div className='overlay'></div>
        <Container>
            <h1>web developer</h1>
            <p>Dolor cillum magna non pariatur commodo sint ullamco adipisicing magna id anim. Nisi cillum esse occaecat ex ex esse amet excepteur
             labore aliqua tempor aliqua pariatur quis. 
             Ea nisi laborum in elit quis in sint mollit do. A
             dipisicing dolore aute nisi magna ipsum. 
             Cupidatat esse velit do velit irure ut magna labore velit exercitation.
              Occaecat nisi nostrud amet ex dolor sunt nostrud. 
              Elit pariatur dolor quis ad cillum elit velit incididunt cupidatat.
             Cupidatat esse velit do velit irure ut magna labore velit exercitation.
              Occaecat nisi nostrud amet ex dolor sunt nostrud. 
              Elit pariatur dolor quis ad cillum elit velit incididunt cupidatat.</p>
        </Container>
    </Jumbo>
    </Styles>
)
export default Jumbotron
