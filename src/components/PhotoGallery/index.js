import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import useInView from '../../hooks/useInView';

// Three columns on desktop, two on a tablet, one on a phone.
const breakpointColumns = {
  default: 3,
  1024: 2,
  768: 1,
};

// A photograph whose file is not in the repo yet renders as a marked slot
// instead of a broken image. Drop the file at the expected path and the slot
// fills itself; no code change needed.
const Photo = ({ src, alt }) => {
  const [ref, inView] = useInView();
  const [missing, setMissing] = useState(false);
  const fileName = src.replace(process.env.PUBLIC_URL, '');

  return (
    <div
      ref={ref}
      className={`home-photo gallery-image-reveal ${inView ? 'gallery-image-reveal--visible' : ''}`}
    >
      {missing ? (
        <div className="home-photo-placeholder" role="img" aria-label={`Placeholder for ${fileName}`}>
          <span>photograph to come</span>
          <code>{fileName}</code>
        </div>
      ) : (
        <img src={src} alt={alt} loading="lazy" onError={() => setMissing(true)} />
      )}
    </div>
  );
};

const PhotoGallery = ({ images }) => (
  <Masonry
    breakpointCols={breakpointColumns}
    className="photo-grid"
    columnClassName="photo-grid_column"
  >
    {images.map((image) => (
      <Photo key={image.src} {...image} />
    ))}
  </Masonry>
);

export default PhotoGallery;
