import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cat from './cat';
import Fallback from './fallback';

function App() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const RightTime = hours % 12 === 3 && minutes === 14;
  return (
    <div className="App">
      <header className="App-header">
        { RightTime && <Cat /> || <Fallback /> } 
      </header>
    </div>
  );
}

export default App;
