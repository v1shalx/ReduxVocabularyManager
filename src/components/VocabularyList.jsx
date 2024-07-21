import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VocabularyItem from './VocabularyItem';
import { getAllVocabularies, deleteVocabulary, updateVocabulary } from '../api/vocabularyService';
import './VocabularyList.css';
import SearchBar from './SearchBar';

const VocabularyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allVocabularies, setAllVocabularies] = useState([]);
  const vocabularies = useSelector((state) => state.vocabulary.filteredVocabularies);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchVocabularies = async () => {
      try {
        const response = await getAllVocabularies();
        setAllVocabularies(response.data);
        dispatch({ type: 'SET_VOCABULARIES', payload: response.data });
      } catch (error) {
        console.error('Error fetching vocabularies:', error);
      }
    };

    fetchVocabularies();
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await deleteVocabulary(id);
      dispatch({ type: 'DELETE_VOCABULARY', payload: id });
    } catch (error) {
      console.error('Error deleting vocabulary:', error);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await updateVocabulary(id, updatedData);
      const response = await getAllVocabularies();
      dispatch({ type: 'SET_VOCABULARIES', payload: response.data });
    } catch (error) {
      console.error('Error updating vocabulary:', error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = allVocabularies.filter(vocab =>
      vocab.word.toLowerCase().includes(term.toLowerCase()) ||
      vocab.definition.toLowerCase().includes(term.toLowerCase())
    );
    dispatch({ type: 'SET_VOCABULARIES', payload: filtered });
  };

  return (
    <div className="vocabulary-list">
      <SearchBar onSearch={handleSearch} />
      {vocabularies.length === 0 ? (
        <p>No vocabularies found.</p>
      ) : (
        vocabularies.map((vocab) => (
          <VocabularyItem
            key={vocab._id}
            vocab={vocab}
            deleteVocabulary={handleDelete}
            updateVocabulary={handleUpdate}
          />
        ))
      )}
    </div>
  );
};

export default VocabularyList;
