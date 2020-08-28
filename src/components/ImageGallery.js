import React from 'react';
import ImageThumb from './ImageThumb';

const ImageGallery = (props) => {
  const { images } = props;
  return (
    <section className='images'>
      {
        images.map((image) => (
          <a key={`a-${image.id}`} href={image.urls.regular}>
            <ImageThumb image={image} />
          </a>
        ))
      }
    </section>
  );
};

export default ImageGallery;