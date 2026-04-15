import React from 'react';
import useInView from '../../hooks/useInView';

const GalleryImage = ({ imageUrl, genre }) => {
  const [ref, inView] = useInView();
  const altText = genre ? `${genre} photography by julien clifford` : 'photography by julien clifford';
  return (
    <div ref={ref} className={`gallery-image-reveal ${inView ? 'gallery-image-reveal--visible' : ''}`}>
      <img
        src={imageUrl}
        alt={altText}
        loading="lazy"
        style={{
          width: '100%',
          display: 'block'
        }}
      />
    </div>
  );
};

export default GalleryImage;
