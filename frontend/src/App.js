import React, { useState, useEffect } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {

  const [ data, setData ] = useState(null)

  useEffect(()=>{
    const test = async () => {
      let res = await axios('/test')
      setData(res.data)
    }
    test()
  })
  

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
        <div>
          {data}
        </div>
      </header>
    </div>
  );
}

export default App;
