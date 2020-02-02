import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import CardList from '../src/components/card-list';

function App() {
  const [monstersData, setMonstersData] = useState([]);
  console.log("this is monster's data:", monstersData);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      setMonstersData(response.data);
      console.log("monster's email:", monstersData);
    })
    .catch(error => {
      console.log('ehh error', error)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <CardList monsters={monstersData}/>
      </header>
    </div>
  );
}

export default App;
