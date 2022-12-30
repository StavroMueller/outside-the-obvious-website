import React from 'react';
import Container from 'react-bootstrap/Container';
import wotoFinder from '../../utilities/wotoFinder';
import PhotoAlbum from 'react-photo-album';
import Gallery from '../../components/Gallery';


const Fashion = () => {
  const wotoUrls = wotoFinder('fashion' ,13);

  // const photos = wotoUrls.map(url => ({ 
  //   src: url,
  //   width: 800,
  //   height: 600
  // }));

  return (
    <>
      <Container>
        <h2>Fashion</h2>
        <h3>A unique perspective is critical, especially in the world of fashion. We deliver results that are not only technically impressive, but uniquely identifiable. Don't just get photos, tell a story.</h3>
        <Gallery imageUrls={wotoUrls} />
      </Container>
    </>
  )   
}

export default Fashion;
