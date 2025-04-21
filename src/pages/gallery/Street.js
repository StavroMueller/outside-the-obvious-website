import React from "react";
import Container from "react-bootstrap/Container";
import wotoFinder from "../../utilities/wotoFinder";
import Gallery from "../../components/Gallery";

const Street = () => {
  const wotoUrls = wotoFinder("street", 16);
  return (
    <>
      <Container>
        <Gallery imageUrls={wotoUrls} />
      </Container>
    </>
  );
};

export default Street;
