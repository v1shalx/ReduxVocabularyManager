import axios from 'axios';

const API_URL = 'http://localhost:5000/api/vocabularies';

// Create a new vocabulary
export const createVocabulary = (vocabulary) => {
  return axios.post(API_URL, vocabulary);
};

// Get all vocabularies
export const getAllVocabularies = () => {
  return axios.get(API_URL);
};

// Get a vocabulary by ID
export const getVocabularyById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Update a vocabulary by ID
export const updateVocabulary = (id, updatedData) => {
  return axios.put(`${API_URL}/${id}`, updatedData);
};

// Delete a vocabulary by ID
export const deleteVocabulary = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

// Search vocabularies by word
export const searchVocabulary = (searchTerm) => {
  return axios.get(`${API_URL}?word=${searchTerm}`);
};

// Filter vocabularies by date
export const filterByDate = (date) => {
  return axios.get(`${API_URL}?date=${date}`);
};
