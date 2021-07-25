import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem'

const ImageGallery =  ({ images }) => (
    <ul className="ImageGallery">
        {images.map(({ webformatURL, id, largeImageURL }) => (
            <ImageGalleryItem 
                largeImageURL={largeImageURL} 
                webformatURL={webformatURL}
                key={id} />
        ))}
    </ul>
);
// ImageGallery.propTypes = {
//     id: PropTypes.any,
//     name: PropTypes.string,
//     number: PropTypes.string,
// }

export default ImageGallery;