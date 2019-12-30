import React from 'react';
import './App.css';
import Map from './map.js';
import Plot from './plot.js';

function App() {
  return (
    <div className="App">
    <h2>Pollution Data</h2>
      <header className="App-header">
        <p>Here's the map showing the Pollution data at IIT Delhi </p>
        <Map/>

        <Plot/>
      </header>
    </div>
  );
}

export default App;
