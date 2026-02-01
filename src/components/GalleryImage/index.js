import React from 'react';

const GalleryImage = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt=""
      loading="lazy"
      style={{
        width: '100%',
        display: 'block'
      }}
    />
  );
};

export default GalleryImage;
