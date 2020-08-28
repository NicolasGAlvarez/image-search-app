require('dotenv').config()
const apiUrl = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}&query=`;

export default {
  async search(searchTerm) {
    const query = `${apiUrl}${searchTerm}`;

    try {
      const response = await fetch(query);
      const data = await response.json();
      const remaining = response.headers.get('X-Ratelimit-Remaining');
      const result = {
        remaining: remaining,
        ...data
      }
      return result;
    } catch (error) {
      console.log('[!] Failed fetch.', error);
    }
  }
}


/*
require('dotenv').config()

const search = async (searchTerm) => {
  const query = `${process.env.REACT_APP_API_URL}${searchTerm}`;
  try {
    const response = await fetch(query);
    const data = await response.json();
    return data.results;
  }
  catch (err) {
    console.log('[!] Fetch failed.', err)
  }
}

export default search;
*/