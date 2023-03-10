import React from 'react';
import Container from 'react-bootstrap/Container';
import wotoFinder from '../../utilities/wotoFinder';
import Gallery from '../../components/Gallery'

const Street = () => {
  const wotoUrls = wotoFinder('street' ,16);
  return (
    <>
      <Container>
        <h2>Street</h2>
        <h3>Street is a passion. Street is a feeling. Some would say a funny feeling.</h3>
        <Gallery imageUrls={wotoUrls} />
      </Container>
    </>
  );
}

export default Street;
