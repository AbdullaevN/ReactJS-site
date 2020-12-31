import React from 'react'
import { Carousel } from 'react-bootstrap'
import water from '../water.jpeg' 


const Slider =() =>{
    return(
        <Carousel>
            <Carousel.Item style={{'height': '600px'}}>
            <img 
            className='d-block w-100'
            src={water}
            alt='frist slide'

            />
            <Carousel.Caption>
                <h3>Web blog</h3>
                <p> Do DO</p>
            </Carousel.Caption>

            </Carousel.Item>   


            <Carousel.Item style={{'height': '600px'}}>
            <img 
            className='d-block w-100'
            src={water}
            alt='frist slide'

            />
            <Carousel.Caption>
                <h3>Web blog</h3>
                <p> Do DO</p>
            </Carousel.Caption>

            </Carousel.Item>    


            <Carousel.Item style={{'height': '600px'}}>
            <img 
            className='d-block w-100'
            src={water}
            alt='frist slide'

            />
            <Carousel.Caption>
                <h3>Web blog</h3>
                <p> Do DO</p>
            </Carousel.Caption>

            </Carousel.Item>    
        </Carousel>  
    )
}
export default Slider