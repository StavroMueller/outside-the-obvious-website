import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Masonry from 'react-masonry-css'

import GalleryImage from '../GalleryImage';

const Gallery = ({imageUrls}) => {
    console.log(imageUrls, "urls from component")
    return (
        <Container>
            <Masonry breakpointCols={2} className="photo-grid" columnClassName="photo-grid_column">
                {
                    imageUrls.map((url, i) => {
                        return (
                            <GalleryImage imageUrl={url}/>
                        )
                    })
                }
            </Masonry>
        </Container>
    )
}

export default Gallery;