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
        </div>
        <div id="imgs">
          <img src={wendy2} id="wendy2"></img>
        </div>
        <h1><span id="wendy">Wendy Jann</span></h1>
        <div id="number">
          <span>wendy1jann@gmail.com</span>
        </div>
      </div>
        <img src={wendy} id="wendy4"></img>
        <p>I am on the left!</p>
        <a
          className="App-link"
          href="https://maxjann.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span id="jann">Jann Software</span>
        </a>
    </div>
  );
}

export default App;
