import React, { useState } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


const PickoftheWeak = () => {

  const [show, setShow] = useState(false);

  return (
    <section id="musttry">
      <div className="text-center ">
        <h1 className="display-5 mb-5 mt-5">Pick of The Week</h1>
      </div>
      <Container>
        <Row className="align-items-center">

          <Col md={7}>
          <Image src={require("../assets/center.jpeg")} fluid={true} alt="pizza" rounded></Image>
          </Col>

          <Col  md={5}>
          <div>
             <h2 className="h1">Dobule Cheese Pizza</h2>
             <p className="lead text-muted">Pizza, dish of Italian origin pizza, dish  olives, mozzarella or other cheese, and many otherconsisting of a flattened disk of bread dough topped with some combination.</p>
             <Button onClick={()=> setShow(true)}><i class="bi bi-bag-heart-fill"></i>  Buy Now</Button>
          </div>
          </Col>

        </Row>

        <ToastContainer
          className="p-3 position-fixed bottom-0 end-0"
          position={'bottom-end'}
          style={{ zIndex: 1 }}
        >
          <Toast className="" onClose={()=>setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header className="bg-success text-white" closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added !</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body className="bg-success text-white">Item Added to the Cart</Toast.Body>
          </Toast>
        </ToastContainer>

      </Container>
    </section>
  );
};

export default PickoftheWeak;
