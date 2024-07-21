import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateVocabulary } from '../api/vocabularyService';
import './VocabularyUpdateForm.css';

const VocabularyUpdateForm = ({ vocab, onSubmit, onCancel }) => {
  const [word, setWord] = useState(vocab.word);
  const [definition, setDefinition] = useState(vocab.definition);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedVocabulary = { ...vocab, word, definition };
      await updateVocabulary(vocab._id, updatedVocabulary);
      dispatch({ type: 'UPDATE_VOCABULARY', payload: updatedVocabulary });
      onSubmit(updatedVocabulary);
    } catch (error) {
      console.error('Error updating vocabulary:', error);
    }
  };

  return (
    <div className="vocabulary-update-form">
      <h2>Update Vocabulary</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          required
        />
        <textarea
          placeholder="Definition"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          required
        />
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default VocabularyUpdateForm;
