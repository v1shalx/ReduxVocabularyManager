// src/actions/vocabularyActions.js

// Action Types
export const ADD_VOCABULARY = 'ADD_VOCABULARY';
export const DELETE_VOCABULARY = 'DELETE_VOCABULARY';
export const SET_VOCABULARIES = 'SET_VOCABULARIES';

// Action Creators
export const addVocabulary = (vocabulary) => ({
  type: ADD_VOCABULARY,
  payload: vocabulary,
});

export const deleteVocabulary = (id) => ({
  type: DELETE_VOCABULARY,
  payload: id,
});

export const setVocabularies = (vocabularies) => ({
  type: SET_VOCABULARIES,
  payload: vocabularies,
});
export const UPDATE_VOCABULARY = 'UPDATE_VOCABULARY';

export const updateVocabulary = (vocabulary) => ({
  type: UPDATE_VOCABULARY,
  payload: vocabulary,
});