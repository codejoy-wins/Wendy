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
        <div id="imgs">
          <img src={wendy2} id="wendy2"></img>
        </div>
        <div id="number">
          <span>(805) 660 9376</span>
        </div>
      </div>
        <a
          className="App-link"
          href="https://maxjann.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jann Software
        </a>
    </div>
  );
}

export default App;
