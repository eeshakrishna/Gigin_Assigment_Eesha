import React, { useState } from 'react';
import { fetchBreedsByAnimalType } from '../services/api';
import '../App.css'; // Import the CSS file

const BreedPage = () => {
  const [animal, setAnimal] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchBreeds = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchBreedsByAnimalType(animal);
      setBreeds(data.breeds); // Ensure this matches the API response structure
    } catch (err) {
      setError('Failed to fetch breeds.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Fetch Breeds by Animal Type</h1>
      <div className="form-container">
        <input 
          type="text" 
          value={animal} 
          onChange={(e) => setAnimal(e.target.value)} 
          placeholder="Enter animal type" 
          className="input"
        />
        <button onClick={handleFetchBreeds} className="button">Fetch Breeds</button>
      </div>

      {loading && <p className="error">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {breeds.length > 0 && (
        <ul className="results">
          {breeds.map((breed, index) => (
            <li key={index} className="result-item">{breed}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BreedPage;
