import React, { useState } from 'react';
import './VocabularyItem.css';

const VocabularyItem = ({ vocab, deleteVocabulary, updateVocabulary }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newWord, setNewWord] = useState(vocab.word);
  const [newDefinition, setNewDefinition] = useState(vocab.definition);

  const handleUpdate = async () => {
    try {
      await updateVocabulary(vocab._id, { word: newWord, definition: newDefinition });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating vocabulary:', error);
    }
  };

  return (
    <div className="vocabulary-item">
      {isEditing ? (
        <div className="vocabulary-edit">
          <input
            type="text"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
          />
          <textarea
            value={newDefinition}
            onChange={(e) => setNewDefinition(e.target.value)}
          />
          <div className="vocabulary-actions">
            <button onClick={handleUpdate}>Save</button>
            <button className="cancel" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="vocabulary-view">
          <h3>{vocab.word}</h3>
          <p>{vocab.definition}</p>
          <div className="vocabulary-actions">
            <button onClick={() => deleteVocabulary(vocab._id)}>Delete</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabularyItem;
