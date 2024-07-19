import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PizzaCard from "./PizzaCard";

const Menu = () => {
  const [menu] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <section id="menu" className="bg-light">
      <Container>
        <div className="text-center">
          <h2 className="text-dark">Menubar section you need to explore</h2>
        </div>
        <Row>
          {menu.map(() => {
            return (
              <Col md={6} lg={4}>
                <PizzaCard />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
