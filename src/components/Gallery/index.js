import React from 'react';
import Masonry from 'react-masonry-css';
import GalleryImage from '../GalleryImage';

const breakpointColumns = {
  default: 3,
  1200: 2,
  768: 2,
  480: 1
};

const Gallery = ({ imageUrls, genre }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="photo-grid"
      columnClassName="photo-grid_column"
    >
      {imageUrls.map((url, i) => (
        <GalleryImage key={i} imageUrl={url} genre={genre} />
      ))}
    </Masonry>
  );
};

export default Gallery;
