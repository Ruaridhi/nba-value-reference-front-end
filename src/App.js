import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
fetch('https://localhost:5001/api/player/CE72658B')
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.error("The call to /api/player has failed:" + err));

//const response = useState(this.state);
  return (

    <div className="App">
      <header className="App-header">
        <p>
          {data}
        </p>
      </header>
    </div>
  );
}

export default App;
