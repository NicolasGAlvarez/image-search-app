import React from 'react';

const ImageThumb = (props) => {
  const { image } = props;
  return (
    < img
      className='u-full-width'
      key={image.id}
      alt={image.alt_description}
      src={image.urls.small}
    />
  );
};

export default ImageThumb;