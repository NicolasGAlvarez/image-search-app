import React from 'react';

const ImageThumb = (props) => {
  const { image } = props;
  const usplashLink = 'https://unsplash.com/?utm_source=image-search-app&utm_medium=referral';
  return (
    <div className="imageThumb">
      <a href={image.urls.regular} data-attribute="SRL">
        <img
          className='u-full-width'
          src={image.urls.thumb}
          alt={image.alt_description}
        />
      </a>
      <p className="imageLabel">
        Photo by <a target="_blank" rel="noopener noreferrer" href={image.user.links.html}>{image.user.name}</a> on <a href={usplashLink}> Unsplash</a>
      </p>
    </div>
  );
};

export default ImageThumb;