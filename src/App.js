import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import VocabularyForm from './components/VocabularyForm';
import VocabularyList from './components/VocabularyList';
import SearchBar from './components/SearchBar';
import DateFilter from './components/DateFilter';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <header className="app-header">
            <h1 className='heading'>Vocabulary Manager</h1>
          </header>
          <main className="app-main">
           
            <VocabularyForm />
            <VocabularyList />
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
