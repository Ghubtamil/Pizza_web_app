import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Orders from './Orders';
import Badge from 'react-bootstrap/esm/Badge';


const Cart = () => {

    const [show, setShow] = useState(false);

  return (
    <>
    <Button variant="primary" onClick={()=> setShow(!show)} className="me-2 position-relative">
    <i className="bi bi-cart4"></i> 
    <Badge bg="danger">4</Badge>
    <span className="visually-hidden">text</span>
    </Button>
    <Offcanvas show={show} onHide={()=> setShow(!show)} placement={"end"} >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
       <Orders/>
       <div className='text-end mt-3'>
          <Button>Check Out</Button>
       </div>
      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}

export default Cart