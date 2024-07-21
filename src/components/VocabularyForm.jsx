import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createVocabulary } from '../api/vocabularyService';
import { addVocabulary } from '../redux/actions/vocabularyActions';
import './VocabularyForm.css';

const VocabularyForm = ({ onAddVocabulary }) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newVocabulary = { word, definition, date: new Date() };
      await createVocabulary(newVocabulary);
      dispatch(addVocabulary(newVocabulary));
      setWord('');
      setDefinition('');
      onAddVocabulary(newVocabulary); // Notify parent of new vocabulary
    } catch (error) {
      console.error('Error adding vocabulary:', error);
    }
  };

  return (
    <div className="vocabulary-form">
      <h2>Add New Vocabulary</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          required
          className="input-word"
        />
        <input
          type="text"
          placeholder="Definition"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          required
          className="input-definition"
        />
        <button type="submit" className="submit-button">+</button>
      </form>
    </div>
  );
};

export default VocabularyForm;
