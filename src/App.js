import React from 'react';
import './styles/styles.css';

// Component
import Main from './components/Main/Main'
import Header from './components/Header/Header'

// Helmet Elements 
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Maestus | Official Site</title>
        <meta name="description" content="Maestus is a blackened doom band from the Pacific Northwest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://maest.us" />
      </Helmet>
      <Header />
      <Main />
    </div>
  );
}

export default App;
