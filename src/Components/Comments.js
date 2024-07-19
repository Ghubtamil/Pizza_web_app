import React from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

const Comments = () => {
  return (
    <section id="contact">
      <div className="text-center mt-5">
        <h3 className="display-5 mb-5">Comments</h3>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-envelope-fill"></i>
                </InputGroup.Text>
                <FloatingLabel controlId="floatingInput" label="Email address">
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-person-circle"></i>
                </InputGroup.Text>
                <FloatingLabel controlId="floatingInput" label="Name">
                  <Form.Control type="text" placeholder="Name" />
                </FloatingLabel>
              </InputGroup>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Comments;
