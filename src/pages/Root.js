import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gallery from '../components/Gallery';
import wotoFinder from '../utilities/wotoFinder';

const Root = () => {
  const wotoUrls = [...wotoFinder('street', 3), ...wotoFinder('fashion', 3), ...wotoFinder('travel', 3)];
  return (
    <>
      <div>
        <Container>
            <Row>
              <Col>
                <p>Outside The Obvious is a multidisciplinary photography fine art, and fashion show consultant firm. We can do everything from planning your shows to providing distinctive photos.</p>
              </Col>
            </Row>
          <Gallery imageUrls={wotoUrls} />
        </Container>
      </div>
    </>
  )
}

export default Root
