import React, { useState } from 'react';
import { fetchPetById } from '../services/api';
import '../App.css';

const PetDetails = () => {
  const [id, setId] = useState('');
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      setError('Please enter a pet ID.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchPetById(id);
      if (data && data.pets && data.pets.length > 0) {
        setPet(data.pets[0]);
      } else {
        setError('Pet not found.');
      }
    } catch (err) {
      setError('Failed to fetch pet details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Pet Details</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="petId">Enter Pet ID:</label>
          <input
            type="text"
            id="petId"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="input"
          />
          <button type="submit" className="button">Fetch Pet Details</button>
        </form>
      </div>
      
      {loading && <p className="error">Loading...</p>}
      {error && <p className="error">{error}</p>}
      
      {pet && (
        <div className="pet-details">
          <h2 className="pet-name">{pet.name}</h2>
          <p><strong>Breed:</strong> {pet.breed}</p>
          <p><strong>Age:</strong> {pet.age}</p>
          <p><strong>Animal:</strong> {pet.animal}</p>
          <p><strong>Location:</strong> {pet.location}</p>
          <p><strong>Description:</strong> {pet.description}</p>
          <div>
            {pet.images && pet.images.length > 0 ? (
              pet.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${pet.name}-${index}`}
                  onError={(e) => e.target.style.display = 'none'}
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PetDetails;
