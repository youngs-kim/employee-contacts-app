import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Contacts = () => {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col>
          <h1>Contacts</h1>
        </Col>
      </Row>
      <Row>
        <Col className="px-2 my-2">
          <Card style={{ width: '12rem' }}>
            <Card.Img src="/mbappe.png" variant="top" />
            <Card.Body>
              <Card.Title>Kylian Mbappe</Card.Title>
              <Card.Text>
                Mbappe@test.com
                <br />
                111.2222.3333
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-2 my-2">
          <Card style={{ width: '12rem' }}>
            <Card.Img src="/De-Bruyne.png" variant="top" />
            <Card.Body>
              <Card.Title>Kevin De Bruyne</Card.Title>
              <Card.Text>
                DeBruyne@test.com
                <br />
                111.2222.3333
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="px-2 my-2">
          <Card style={{ width: '12rem' }}>
            <Card.Img src="/sonheungmin.png" variant="top" />
            <Card.Body>
              <Card.Title>Son Heung Min</Card.Title>
              <Card.Text>
                sonny@test.com
                <br />
                111.2222.3333
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
