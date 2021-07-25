import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem =  ({ webformatURL, id, largeImageURL, onToggleModal }) => {
    return(
    <li className="ImageGalleryItem" id={id}>
        <img src={webformatURL} alt="gallery image" className="ImageGalleryItem-image" />
    </li>)
};
// ImageGalleryItem.propTypes = {
//     id: PropTypes.any,
//     name: PropTypes.string,
//     number: PropTypes.string,
// }

export default ImageGalleryItem;