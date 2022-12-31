import React from 'react';
import Container from 'react-bootstrap/Container';
import wotoFinder from '../../utilities/wotoFinder';
import Gallery from '../../components/Gallery'

const Travel = () => {
  const wotoUrls = wotoFinder('travel' ,24);
  return (
    <>
      <Container>
        <h2>Travel</h2>
        <h3>On assignment.</h3>
        <Gallery imageUrls={wotoUrls} />
      </Container>
    </>
  );
}

export default Travel;