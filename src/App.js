import React, { useState, useCallback } from 'react';
import './App.css';

import loadingImg from './assets/loading.gif';
import API from './API';

//TODO: Divide into components.
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const searchTermChanged = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const loadImages = async () => {
    setLoading(true);
    const images = await API.search(searchTerm);
    setImages(images);
    setLoading(false);
  }

  const formSubmitted = useCallback((event) => {
    event.preventDefault();
    if (!searchTerm.trim()) return;

    console.log('Form submitted.');

    setImages([]); // Clear images array
    loadImages();
  }, [images, searchTerm]);


  return (
    <div className="App container">
      <div className="row">
        <h3>Image Search App</h3>
      </div>

      <form onSubmit={formSubmitted}>
        <div className="row">
          <label
            className="twelve columns"
            htmlFor="searchTerm"
          >Search term</label>
        </div>

        <div className="row">
          <div className="nine columns">
            <input
              name="searchTerm"
              id="searchTerm"
              className="u-full-width"
              onChange={searchTermChanged}
              value={searchTerm}
            />
          </div>

          <div className="three columns">
            <button
              type="submit"
              className="button-primary u-full-width"
            >Search</button>
          </div>
        </div>
      </form>

      {loading ? <img className="u-full-width" alt="Loading..." src={loadingImg} /> : ''}

      <section className='images'>
        {
          images.map((image) => (
            <a key={`a-${image.id}`} href={image.urls.regular}>
              <img
                className='u-full-width'
                key={image.id}
                alt={image.alt_description}
                src={image.urls.small} />
            </a>
          ))
        }
      </section>
    </div>
  );
}

export default App;
