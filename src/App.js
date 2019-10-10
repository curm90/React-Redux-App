import React from 'react';
import { connect } from 'react-redux';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <CharacterList />
    </div>
  );
}

export default connect(state => state)(App);
