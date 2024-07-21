// src/reducers/vocabularyReducer.js

import { ADD_VOCABULARY, DELETE_VOCABULARY, SET_VOCABULARIES, UPDATE_VOCABULARY } from '../actions/vocabularyActions';

const initialState = {
  vocabularies: [],
  filteredVocabularies: [],
};

const vocabularyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VOCABULARY:
      return {
        ...state,
        vocabularies: [...state.vocabularies, action.payload],
        filteredVocabularies: [...state.filteredVocabularies, action.payload],
      };
    case DELETE_VOCABULARY:
      return {
        ...state,
        vocabularies: state.vocabularies.filter((vocab) => vocab._id !== action.payload),
        filteredVocabularies: state.filteredVocabularies.filter((vocab) => vocab._id !== action.payload),
      };
    case SET_VOCABULARIES:
      return {
        ...state,
        vocabularies: action.payload,
        filteredVocabularies: action.payload,
      };
    case UPDATE_VOCABULARY:
      return {
        ...state,
        vocabularies: state.vocabularies.map((vocab) =>
          vocab._id === action.payload._id ? action.payload : vocab
        ),
        filteredVocabularies: state.filteredVocabularies.map((vocab) =>
          vocab._id === action.payload._id ? action.payload : vocab
        ),
      };
    default:
      return state;
  }
};

export default vocabularyReducer;
