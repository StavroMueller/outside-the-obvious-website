import React from 'react';
import Row from 'react-bootstrap/Row'


const GalleryImage = ({imageUrl}) => {
    console.log(imageUrl)
    return (
        <>
            <img src={imageUrl} width="50%"></img>
        </>
    )
}

export default GalleryImage;