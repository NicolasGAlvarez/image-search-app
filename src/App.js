import React, { useState, useCallback } from 'react';
import './App.css';

import SearchForm from './components/SearchForm';
import ImageGallery from './components/ImageGallery';
import loadingImg from './assets/loading.gif';
import API from './API';

import SimpleReactLightbox from "simple-react-lightbox";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const searchTermChanged = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const loadImages = useCallback(async () => {
    try {
      setLoading(true);
      const response = await API.search(searchTerm);
      setImages(response.results);
      setLoading(false);
    } catch (error) {
      console.log('[!] Failed fetch.', error);
    }
  }, [searchTerm]);

  const formSubmitted = useCallback((event) => {
    event.preventDefault();
    if (!searchTerm.trim()) return;
    setImages([]); // Clear images array
    loadImages();
  }, [loadImages, searchTerm]);


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

      {loading ? <img className="loadingImg" alt="Loading..." src={loadingImg} /> : ''}

      <SimpleReactLightbox>
        <ImageGallery images={images} />
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
