import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

fetch('https://localhost:44371/api/player/CE72658B')
.then((response) => {
console.log(response.body)});

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
