import React, { useState, useEffect } from 'react';
import { fetchPets } from '../services/api';
import '../App.css';

const PetListPage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPets = async () => {
      try {
        const data = await fetchPets();
        if (data && data.pets) {
          setPets(data.pets);
          console.log('Fetched Pets:', data.pets);
          console.log('First Pet:', data.pets[0]);
        } else {
          setError('No pets data available.');
        }
      } catch (err) {
        setError('Failed to fetch pets.');
      } finally {
        setLoading(false);
      }
    };

    getPets();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="pet-list-container">
      <h1>List of Pets</h1>
      {pets.length > 0 ? (
        <ul>
          {pets.map((pet) => (
            <li key={pet.id}>
              <h2>{pet.name}</h2>
              <p><strong>Breed:</strong> {pet.breed}</p>
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
                      style={{ width: '200px', height: 'auto', marginRight: '10px' }}
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pets available.</p>
      )}
    </div>
  );
};

export default PetListPage;
