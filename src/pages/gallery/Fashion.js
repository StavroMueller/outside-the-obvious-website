import React from "react";
import Container from "react-bootstrap/Container";
import wotoFinder from "../../utilities/wotoFinder";
import PhotoAlbum from "react-photo-album";
import Gallery from "../../components/Gallery";

const Fashion = () => {
  const wotoUrls = wotoFinder("fashion", 13);

  // const photos = wotoUrls.map(url => ({
  //   src: url,
  //   width: 800,
  //   height: 600
  // }));

  return (
    <>
      <Container>
        <Gallery imageUrls={wotoUrls} />
      </Container>
    </>
  );
};

export default Fashion;
