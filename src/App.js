import React from 'react';
import './styles/styles.css';

// Component
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import HelmetData from './components/HelmetData/HelmetData'


function App() {
  return (
    <div className="App">
      <HelmetData />
      <Header />
      <Main />
    </div>
  );
}

export default App;
