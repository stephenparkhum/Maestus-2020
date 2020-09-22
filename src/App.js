import React from 'react';
import logo from './logo.svg';
import './styles/styles.css';

// Component
import Main from './components/Main/Main'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
    <Header />
     <Main />
    </div>
  );
}

export default App;
