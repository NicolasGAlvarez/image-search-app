require('dotenv').config()

export default {
  async search(searchTerm) {
    const query = `${process.env.REACT_APP_API_URL}${searchTerm}`;

    try {
      const response = await fetch(query);
      const data = await response.json();
      return data.results;
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