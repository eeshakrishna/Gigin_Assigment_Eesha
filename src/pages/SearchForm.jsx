import React, { useState } from 'react';
import { searchPets } from '../services/api';
import '../App.css'; // Import the CSS file

const SearchForm = () => {
  const [animal, setAnimal] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [breed, setBreed] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const location = `${city}, ${state}`.trim();

    try {
      const response = await searchPets(animal, location, breed);
      if (response && response.pets) {
        setResults(response.pets);
      } else {
        setError('No pets found.');
      }
    } catch (error) {
      setError('Error fetching pets.');
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Find a Pet</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          placeholder="Animal"
          className="input"
        />
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="input"
        />
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
          className="input"
        />
        <input
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          placeholder="Breed"
          className="input"
        />
        <button type="submit" className="button">Search</button>
      </form>

      {error && <p className="error">{error}</p>}
      {results.length > 0 && (
        <ul className="results">
          {results.map((pet) => (
            <li key={pet.id} className="result-item">
              The pet name is <span className="pet-name">{pet.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchForm;
