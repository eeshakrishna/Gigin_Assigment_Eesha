import axios from 'axios';

const API_BASE_URL = 'http://pets-v2.dev-apis.com';

// Fetch list of pets
export const fetchPets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch pets');
  }
};

// Fetch pet details by ID
export const fetchPetById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`, { params: { id } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch pet details');
  }
};

// Fetch breeds by animal type
export const fetchBreedsByAnimalType = async (animal) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/breeds`, { params: { animal } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch breeds');
  }
};

// Search pets
export const searchPets = async (animal, location, breed) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`, { params: { animal, location, breed } });
    return response.data;
  } catch (error) {
    throw new Error('Failed to search pets');
  }
};
