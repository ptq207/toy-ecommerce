import React, { useState, useRef } from 'react';
import moment from 'moment';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import './styles.css';

const Advertisement = ({ name, image, description, link1, link2, time }) => {
  const [isLoading, setIsLoading] = useState(true);
  const counter = useRef(0);

  function imageLoaded() {
    counter.current += 1;
    if (counter.current >= 1) {
      setIsLoading(false);
    }
  }
  return (
    <>
      <Col
        xs={12}
        sm={6}
        lg={4}
        xl={3}
        key={0}
        className="container"
        style={{ display: isLoading ? 'block' : 'none' }}
      >
        <div className="row h-100 justify-content-center align-self-center h-302">
          <Spinner animation="border" className="align-self-center" />
        </div>
      </Col>

      <Col
        xs={12}
        sm={6}
        lg={4}
        xl={3}
        className="mb-3"
        style={{ display: isLoading ? 'none' : 'block' }}
      >
        <Card className="mb-3">
          <Card.Header>Advertisement</Card.Header>
          <Card.Img
            style={{
              height: 200,
              width: '100%',
              display: 'block',
              objectFit: 'cover',
            }}
            src={image}
            alt="Card image"
            onLoad={imageLoaded}
          />
          <Card.Body>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Card.Link href={link1}>Link 1</Card.Link>
              <Card.Link href={link2}>Link 2</Card.Link>
            </ListGroup.Item>
          </ListGroup>

          <Card.Footer>
            {moment().diff(time, 'hours') + ' hours ago'}
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default Advertisement;
