import Carousel from 'react-bootstrap/Carousel';
import {Container,Col,Row} from "react-bootstrap"





function Banner() {
  return (
    <Container>
        <Row>
            <Col>
            <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dgbbmcurw/image/upload/v1719202661/caro.pizza-1_kc5d3y.jpg"
          alt="First slide"
          />
        <Carousel.Caption>
          <h5 className='text-white'>Margherita Pizza</h5>
          <p  className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dgbbmcurw/image/upload/v1719202662/caro-pizza-2_zor33k.jpg"
          alt="Second slide" 
          />
        <Carousel.Caption>
          <h5  className='text-white'>Sicilian Pizza</h5>
          <p  className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dgbbmcurw/image/upload/v1719202662/caro-pizza-3_elcxpd.jpg"
          alt="Third slide"
          />
        <Carousel.Caption>
          <h5  className='text-white'>Hawaiian Pizza</h5>
          <p  className='text-white'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>

       <div className='text-center '>
        <h1 className='display-5 mt-4'>Brick Oven Pizza House</h1>
        <p className='lead text-muted mb-5'>These delicious handmade pizzas have a light and crunchy crust that's thin in the centre and thick and charred around the edges, baked in a rustic wood-fired .</p>
       </div>
       

    </Container>
  );
}

export default Banner;