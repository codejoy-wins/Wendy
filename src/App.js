import React from 'react';
import wendy from './wendy.png';
import wendy2 from './wendy2.jpeg';
import wendy3 from './wendy3.jpeg';


import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <h1><span id="wendy">Wendy Jann</span></h1>
        </div>
        <div>
          <img src={wendy2}></img>
          <img src={wendy3}></img>
        </div>
        <div id="number">
          <span>(805) 660 9376</span>
        </div>
      </div>
      <header className="App-header">
        <img src={wendy} className="App-logo" alt="logo" />
        <p id="bio">
          I am on the left!
        </p>
        <a
          className="App-link"
          href="https://maxjann.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jann Software
        </a>
      </header>
    </div>
  );
}

export default App;
