import { useState, useEffect } from 'react';
import data from '../api/data';

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const searchAPI = async (searchTerm) => {
    try {
      const response = await data.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });

      setResults(response.data.businesses);
    } catch (error) {
      setError('Something went wrong!');
    }
  };

  return { results, error, searchAPI };
};
