import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
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
                <SocialIcon url="mailto:contact@outsidetheobvious.com"/>
                <SocialIcon url="https://instagram.com/outsidetheobvious" />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Some simple serif text, not a bunch of bullshit</p>
              </Col>
            </Row>
          <Gallery imageUrls={wotoUrls} />
        </Container>
      </div>
    </>
  )
}

export default Root
