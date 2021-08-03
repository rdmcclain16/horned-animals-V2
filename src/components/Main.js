import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Dropdown} from 'react-bootstrap';
import HornedBeast from './HornedBeast';

function Main({animalData}) {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Please Enter Your Name" />
                <Form.Text>Raven McClain </Form.Text>
              </Form.Group>
            </Form>
          </Col>
        
          <Col xs={12}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="Filter Dropdown">
                Filter Beast by Horn Amount
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>1 Horn</Dropdown.Item>
                <Dropdown.Item>2 Horns</Dropdown.Item>
                <Dropdown.Item>3 Horns</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {animalData.map((data, key) => {
            return (
              <Col xs={12} md={6} lg={4}>
                <div key={key}>
                  <HornedBeast
                    key={key}
                    image_url={data.image_url}
                    title={data.title}
                    description={data.description}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Main;
