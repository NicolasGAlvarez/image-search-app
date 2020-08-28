import React from 'react';
import ImageThumb from './ImageThumb';
import { SRLWrapper } from 'simple-react-lightbox';

const ImageGallery = (props) => {
  const { images } = props;
  return (
    <section className='images'>
      <SRLWrapper>
        {
          images.map((image) => (
            <ImageThumb key={image.id} image={image} />
          ))
        }
      </SRLWrapper>
    </section>
  );
};

export default ImageGallery;