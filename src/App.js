import React, { useState, useCallback } from 'react';
import './App.css';

import SearchForm from './components/SearchForm';
import ImageGallery from './components/ImageGallery';

import loadingImg from './assets/loading.gif';
import API from './API';

//TODO: Divide into components.
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [remainingSearches, setRemainingSearches] = useState('');

  const searchTermChanged = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const loadImages = useCallback(async () => {
    setLoading(true);
    const response = await API.search(searchTerm);
    setImages(response.results);
    setLoading(false);
    setRemainingSearches(response.remaining);
  }, [searchTerm]);

  const formSubmitted = useCallback((event) => {
    event.preventDefault();
    setImages([]); // Clear images array
    loadImages();
  }, [loadImages]);


  return (
    <div className="App container">
      <div className="row">
        <h3>Image Search App</h3>
      </div>

      <SearchForm
        formSubmitted={formSubmitted}
        searchTermChanged={searchTermChanged}
        searchTerm={searchTerm}
      />

      {loading ? <img className="u-full-width" alt="Loading..." src={loadingImg} /> : ''}

      <h5>Remaining: {remainingSearches}</h5>

      <ImageGallery images={images} />
    </div>
  );
}

export default App;
